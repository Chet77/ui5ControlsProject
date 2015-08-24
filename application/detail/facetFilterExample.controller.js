sap.ui.controller("application.detail.facetFilterExample", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf application.detail.timelineDemoPage
*/
	onInit: function() {
		facetFilterController = this;
		this.getView().addEventDelegate({
			onBeforeShow: function(evt) {
				facetFilterController.onBeforeShow(evt);
			}
		});
	},

	onBeforeShow : function(evt){
    //table data
    var data = {users : [
      {Date:"10/08/2014", Comment:"Transferred to Sales", Agent:"jhardman"},
      {Date:"11/08/2014", Comment:"Transferred to Sales", Agent:"jhardman"},
      {Date:"11/08/2014", Comment:"Transferred to Bills", Agent:"csharma"}
    ]};
    //set table model
    var oModel = new sap.ui.model.json.JSONModel(data);
    sap.ui.getCore().setModel(oModel, "dataModel");

    //create filter data
    var filters = [];
    for(var field in data.users[0]){
      var filter = {};
      filter.type = field;
      filter.values = [];
      for(var i = 0; i < data.users.length;i++){
        var model = data.users[i];
        for (var key in model){
          if(key === field){
            filterModel = {};
            if(filter.values.length !== 0){
              var matchFound = false;
              for(var j=0; j<filter.values.length; j++){
                if(filter.values[j].text === model[key]){
                  filter.values[j].count = parseInt(filter.values[j].count) + 1;
                  matchFound = true;
                  break;
                }
              }
              if(!matchFound){
                filterModel.text = model[key];
                filterModel.count = parseInt("1");
                filter.values.push(filterModel);
              }
            }else{
              filterModel.text = model[key];
              filterModel.count = parseInt("1");
              filter.values.push(filterModel);
            }
          }
        }
      }
      filters.push(filter);
    }

    //set filter model
    var filterData = {filters:filters};
    console.log(filterData.filters);
    var oFilterModel = new sap.ui.model.json.JSONModel(filterData);
    sap.ui.getCore().setModel(oFilterModel, "filterModel");
	},

  /************filter methods******************/
  _applyFilter: function(oFilter) {
    var oTable = facetFilterController.getView().byId("myTable");
    oTable.getBinding("items").filter(oFilter);
  },

  handleFacetFilterReset: function(oEvent) {
    var oFacetFilter = sap.ui.getCore().byId(oEvent.getParameter("id"));
    var aFacetFilterLists = oFacetFilter.getLists();
    for(var i=0; i < aFacetFilterLists.length; i++) {
      for(var j=0; j < aFacetFilterLists.length; j++) {
        aFacetFilterLists[i].setSelectedKeys();
      }
    }
    facetFilterController._applyFilter([]);
  },

  handleListClose: function(oEvent) {
    var oFacetFilter = oEvent.getSource().getParent();
    var mFacetFilterLists = oFacetFilter.getLists().filter(function(oList){
      return oList.getActive() && oList.getSelectedItems().length;
    });

    var oFilter = new sap.ui.model.Filter(mFacetFilterLists.map(function(oList){
      return new sap.ui.model.Filter(oList.getSelectedItems().map(function(oItem) {
        return new sap.ui.model.Filter(oList.getTitle(), "EQ", oItem.getText());
      }), false);
    }), true);
    facetFilterController._applyFilter(oFilter);
  }

});
