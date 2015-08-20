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
			    {itemNo:"004", title:"Flex Layout Demo", description:"This control could be used for screen adjustment in UI5 projects", dateCreated:"10/04/2015", developer:"Chet"},
			    {itemNo:"005", title:"Timeline Demo", description:"This control could be used as 'audit section' in UI5 projects", dateCreated:"05/05/2015", developer:"Chet"},
					{itemNo:"006", title:"List", description:"This control could be used to list items in an array in a  UI5 projects", dateCreated:"20/08/2015", developer:"Mark"}
			]
		};

		// create an OdataModel for master list
		var oMasterModel = new sap.ui.model.json.JSONModel(oList);
		sap.ui.getCore().setModel(oMasterModel, "masterListModel");
	}
});
