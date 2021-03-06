sap.ui.controller("application.detail.timelineDemoPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf application.detail.timelineDemoPage
*/
	onInit: function() {
		timelineController = this;
		this.getView().addEventDelegate({
			onBeforeShow: function(evt) {
				timelineController.onBeforeShow(evt);
			}
		});
	},
	
	onBeforeShow : function(evt){
		var arrAction1 = [{text: "Waiting for a reply"}, {text: "Customer not reachable"}, {text: "Email sent"}];
		var arrAction2 = [{text: "No action"}, {text: "Sent from another plant"}];
		var data = {
		  results : [
             {Date:"10-08-2014 00:03:44", actions:arrAction1, Comment:"Comment1", Agent:"jhardman"},
             {Date:"12-08-2014 00:08:00", actions:arrAction1, Comment:"Reminder Mail", Agent:"ssistu"},
             {Date:"13-08-2014 00:03:24", actions:arrAction2, Comment:"Call", Agent:"csharma"}
		  ]
		};
		// time-line model
		oTimeLineModel = new sap.ui.model.json.JSONModel(data);
		timelineController.getView().setModel(oTimeLineModel);

		var filter = {
			data : [
			  {key:"id1", text:"Action1"},
			  {key:"id2", text:"Action2"},
			  {key:"id3", text:"Action3"}
			]
		};
		//filer model
		oTLFilterModel = new sap.ui.model.json.JSONModel(filter);
		sap.ui.getCore().setModel(oTLFilterModel);
	}
});
