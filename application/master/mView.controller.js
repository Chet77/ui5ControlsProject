sap.ui.controller("application.master.mView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf application.master.mView
*/
	onInit: function() {
		mViewController = this;
		this.getView().addEventDelegate({
			onBeforeShow: function(evt) {
				mViewController.onBeforeShow(evt);
			}
		});
	},

	onBeforeShow : function(evt){

	},

	demoSelected : function(evt){
		var data = evt.getSource().getSelectedItem().getBindingContext("masterListModel").getObject();
		switch(data.itemNo){
			case "001" :
				citApp.getNavigation().toDetailPage("application.detail.feedInputDemoPage", data);
				break;
			case "002" :
				citApp.getNavigation().toDetailPage("application.detail.responsiveFormExample", data);
				break;
			case "003" :
				citApp.getNavigation().toDetailPage("application.detail.responsiveGridExample", data);
				break;
			case "004" :
				citApp.getNavigation().toDetailPage("application.detail.timelineDemoPage", data);
				break;
			case "005" :
				citApp.getNavigation().toDetailPage("application.detail.listExample", data);
				break;
			case "006" :
				citApp.getNavigation().toDetailPage("application.detail.facetFilterExample", data);
				break;
			case "007" :
				citApp.getNavigation().toDetailPage("application.detail.valueStateDemoPage", data);
				break;
			case "008" :
				citApp.getNavigation().toDetailPage("application.detail.modelBindingDemo", data);
				break;
			case "009" :
				citApp.getNavigation().toDetailPage("application.detail.dateFormatter", data);
				break;
			default :
		}
	}
});
