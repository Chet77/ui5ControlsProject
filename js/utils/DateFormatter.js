$.sap.require("sap.ui.core.format.DateFormat");
var DateFormatter = {
	/**
	Function to return a Date object from a string date based on the pattern provided
	@class DateFormatter
	@param {String} sDate - string date that needs to be parsed into a date
	@param {String} sPattern - pattern of the string date that is passed in
	@param {Boolean} bUTC - whether to use UTC, if no timezone is provided
	@param {Boolean} bStrict - to use strict value check
	**/
	parse : function (sDate, sPattern, bUTC, bStrict) {
		bUTC = bUTC || false;
		bStrict = bStrict || false;

		var sapDate = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern : sPattern});
		var oDate = sapDate.parse(sDate, bUTC, bStrict);
		return oDate;
	},

	/**
	Function to return a string date based on a Date object and pattern provided
	@class DateFormatter
	@param {Object} oDate - Date to used when creating formatted string
	@param {String} sPattern - pattern to be used when creating foramtted string
	@param {Boolean} bUTC - whether to use UTC, if no timezone is provided
	**/
	format : function (oDate, sPattern, bUTC) {
		bUTC = bUTC || false;
		var sapDate = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern : sPattern});
		var sDate = sapDate.format(oDate, bUTC);
		return sDate;
	}
};
