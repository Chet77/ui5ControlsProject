sap.ui.controller("application.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf application.main
*/
	onInit: function() {
		mainController = this;
		mainController.createDemoModel();
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf application.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf application.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalise activities.
* @memberOf application.main
*/
//	onExit: function() {
//
//	}
	
	createDemoModel : function(){
		
		var oList = {
			data : [
			    {itemNo:"001", title:"Feed Input Demo", description:"This control could be used as 'comments section' in UI5 projects", dateCreated:"10/04/2015", developer:"Chet"},
			    {itemNo:"002", title:"Form Layout Demo", description:"This control could be used as 'form section' in UI5 projects", dateCreated:"10/04/2015", developer:"Chet"},			    
			    {itemNo:"003", title:"Grid Layout Demo", description:"This control could be used for multiple entry screens in UI5 projects", dateCreated:"10/04/2015", developer:"Chet"},
			    {itemNo:"004", title:"Flex Layout Demo", description:"This control could be used for screen adjustment in UI5 projects", dateCreated:"10/04/2015", developer:"Chet"},
			    {itemNo:"005", title:"Timeline Demo", description:"This control could be used as 'audit section' in UI5 projects", dateCreated:"05/05/2015", developer:"Chet"}
			]	
		};
		
		// create an OdataModel for master list
		var oMasterModel = new sap.ui.model.json.JSONModel(oList);
		sap.ui.getCore().setModel(oMasterModel, "masterListModel");
		
	}

});