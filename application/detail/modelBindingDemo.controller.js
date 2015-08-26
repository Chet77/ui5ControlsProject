sap.ui.controller("application.detail.modelBindingDemo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf application.detail.timelineDemoPage
*/
	onInit: function() {
		modelBindingController = this;
		this.getView().addEventDelegate({
			onBeforeShow: function(evt) {
				modelBindingController.onBeforeShow(evt);
			}
		});
	},

	onBeforeShow : function(evt){
		//model - basic
		var oBasicRowData = { row : [
			{name : "Chet", role : "Developer", company : "CIT"},
			{name : "Tom", role : "Consultant", company : "SAP"}
		]};
		var oBDModel = new sap.ui.model.json.JSONModel(oBasicRowData);
		sap.ui.getCore().setModel(oBDModel, "basicRowModel");

		//model - complex
		var arrRole = [{roleName: "Developer"}, {roleName: "Consultant"}, {roleName: "Manager"}];
		var oComplexData = { row : [
			{name : "Chet",	role : arrRole, company : "CIT"},
			{name : "Rob",	role : arrRole, company : "CIT"},
			{name : "Mark",	role : arrRole, company : "SAP"}
		]};
		var oCDModel = new sap.ui.model.json.JSONModel(oComplexData);
		sap.ui.getCore().setModel(oCDModel, "complexRowModel");

		//model - hyperComplex (TODO:CS)
		var arrCompany = [{companyName: "CIT"}, {companyName: "SAP"}];
		var arrRoleCompany1 = [{roleName: "Developer", companyName : arrCompany}];
		var arrRoleCompany2 = [{roleName: "Consultant", companyName : arrCompany}];
		var oHyperComplexData = { row : [
			{name : "Chet",	role : arrRoleCompany1},
			{name : "Rob",	role : arrRoleCompany2}
		]};
		var oModel = new sap.ui.model.json.JSONModel(oHyperComplexData);
		sap.ui.getCore().setModel(oModel, "hyperComplexRowModel");

	}
});
