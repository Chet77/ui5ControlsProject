sap.ui.controller("application.detail.dateFormatter", {

	onInit: function() {
		this.getView().setDisplayBlock(true);
    dateFormatterController = this;

		//use case 1
		var oDate = new Date();
		var sNewDate = DateFormatter.format(oDate, "dd-MMM-YY HH:mm");
		console.log(sNewDate);

		//use case 2
    var oNewDate = DateFormatter.parse(sNewDate, "dd-MMM-YY HH:mm");
    console.log(oNewDate);
	}

});
