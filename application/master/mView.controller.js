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

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf application.master.mView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf application.master.mView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf application.master.mView
*/
//	onExit: function() {
//
//	}
	
	onBeforeShow : function(evt){
		
	}, 
	
	demoSelected : function(evt){
		var data = evt.getSource().getBindingContext("masterListModel").getObject();
		switch(data.itemNo){
			case "001" : 
				citApp.getNavigation().toDetailPage("application.detail.feedInputDemoPage", data);
				break;
			case "002" : 				
				break;
			case "003" : 
				break;
			case "004" : 
				break;
			case "005" : 
				citApp.getNavigation().toDetailPage("application.detail.timelineDemoPage", data);
				break;
			
			default : 			
		}
	}

});