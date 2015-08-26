sap.ui.controller("application.main", {

	onInit: function() {
		mainController = this;
		mainController.createDemoModel();
	},

	createDemoModel : function(){

		var oList = {
			data : [
			    {itemNo:"001", title:"Feed Input Demo", description:"This control could be used as 'comments section' in UI5 projects", dateCreated:"10/04/2015", developer:"Chet"},
			    {itemNo:"002", title:"Form Layout Demo", description:"This control could be used as a 'form' in a UI5 projects", dateCreated:"20/08/2015", developer:"Mark"},
			    {itemNo:"003", title:"Grid Layout Demo", description:"This control could be used for multiple column screens in UI5 projects", dateCreated:"20/08/2015", developer:"Mark"},
			    {itemNo:"004", title:"Timeline Demo", description:"This control could be used as 'audit section' in UI5 projects", dateCreated:"05/05/2015", developer:"Chet"},
					{itemNo:"005", title:"List Demo", description:"This control could be used to list items in an array in a  UI5 projects", dateCreated:"20/08/2015", developer:"Mark"},
					{itemNo:"006", title:"Facet Filter Demo", description:"This control could be used to apply filters on sap.m List & Table controls", dateCreated:"21/08/2015", developer:"Chet"},
					{itemNo:"007", title:"Value State Demo", description:"This control is used to change the state of sap.m Input & Select controls", dateCreated:"25/08/2015", developer:"Chet"},
					{itemNo:"008", title:"Model Binding Demo", description:"This example depicts how to do model binding (complex) in XML views", dateCreated:"26/08/2015", developer:"Chet"}
			]
		};
		// create an OdataModel for master list
		var oMasterModel = new sap.ui.model.json.JSONModel(oList);
		sap.ui.getCore().setModel(oMasterModel, "masterListModel");
	}
});
