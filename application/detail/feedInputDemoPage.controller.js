jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.ui.controller("application.detail.feedInputDemoPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf application.detail.feedInputDemoPage
*/
	onInit: function() {
		feedInputController = this;
		this.getView().addEventDelegate({
			onBeforeShow: function(evt) {
				feedInputController.onBeforeShow(evt);
			}
		});
	},

	onBeforeShow : function(evt){
		var oFeedInputs = {
				entries : [
				    {author:"Cole", picURL:"images/MaleE1.png", type:"Reply", dateAdded:"10 Apr 2015 17:16:44", text:"This control could be used as 'comments section' in UI5 projects"},
				    {author:"Sarah", picURL:"images/FemaleE2.png", type:"Reply", dateAdded:"10 Apr 2015 12:41:57", text:"This control could be used as 'comments section' in UI5 projects"},
				    {author:"Jones", picURL:"images/MaleE2.png", type:"Reply", dateAdded:"10 Apr 2015 07:16:56", text:"This control could be used as 'comments section' in UI5 projects"},
				]
			};
		// feed entries model
		oFeedDataModel = new sap.ui.model.json.JSONModel(oFeedInputs);
		feedInputController.getView().setModel(oFeedDataModel);
	},

	submitFeed : function(evt){
	    var oFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({style: "medium"});
	    var oDate = new Date();
	    var sDate = oFormat.format(oDate);
	    // create new entry
	    var sValue = evt.getParameter("value");
	    var oEntry = {
	      author : "Jenny",
	      picURL : "images/FemaleE1.png",
	      type : "Reply",
	      dateAdded : "" + sDate,
	      text : sValue
	    };

	    // update model
	    var oModel = feedInputController.getView().getModel();
	    var aEntries = oModel.getData().entries;
	    aEntries.unshift(oEntry);
	    oModel.setData({
	    	entries : aEntries
	    });
	}

});
