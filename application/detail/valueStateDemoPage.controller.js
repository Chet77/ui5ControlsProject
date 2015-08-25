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
		//form model
		var contact = {
			name: "",
			designation: [{text: "Developer"}, {text: "Manager"}, {text: "Consultant"}],
			houseNo: "",
			street: ""
		}

		var oModel = new sap.ui.model.json.JSONModel(contact);
		sap.ui.getCore().setModel(oModel, "contact");

	},

	handleValidateForm: function(evt){
		var inputs = [
	    valueStateController.getView().byId("Input1"),
	    valueStateController.getView().byId("Input2"),
	    valueStateController.getView().byId("Input3")
	  ];
	  // noprotect
	  for(var i=0; i<inputs.length; i++){
	    if (inputs[i].getValue() === "" ||
	        inputs[i].getValue() === undefined ||
	        inputs[i].getValue() === 0) {
	      inputs[i].setValueState("Error");
	      inputs[i].setValueStateText("Please enter a value");
	    }else {
	      inputs[i].setValueState("Success");
	    }
	  }
	  // check states of inputs
	  // var canContinue = true;
	  // for(var j=0;j<inputs.length;j++){
	  //   if ("Error" === inputs[j].getValueState()) {
	  //     canContinue = false;
	  //   }
	  // }
	  // jQuery.sap.require("sap.ca.ui.message.message");
	  // if(canContinue){
	  //   sap.ca.ui.message.showMessageBox({
	  //     type : sap.ca.ui.message.Type.SUCCESS,
	  //     message : "SUCCESS - Proceed"
	  //   });
	  // }else {
	  //   sap.ca.ui.message.showMessageBox({
	  //     type : sap.ca.ui.message.Type.WARNING,
	  //     message : "WARNING - Empty Field(s)"
	  //   });
	  // }
	}
});
