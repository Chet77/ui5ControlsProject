sap.ui.controller("application.detail.valueStateDemoPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf application.detail.timelineDemoPage
*/
	onInit: function() {
		valueStateController = this;
		this.getView().addEventDelegate({
			onBeforeShow: function(evt) {
				valueStateController.onBeforeShow(evt);
			}
		});
	},

	onBeforeShow : function(evt){

	}
});
