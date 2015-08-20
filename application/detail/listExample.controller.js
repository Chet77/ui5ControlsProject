sap.ui.controller("application.detail.listExample", {

	onInit: function() {
		this.getView().setDisplayBlock(true);
		responsiveExampleController = this;
		this.loadData();
  },

	onItemPress : function (evt) {
		var selectedItem = evt.getSource().getSelectedItem().getBindingContext("exampleList").getObject();
		console.log("selected: " + selectedItem.title);
	},

	onThisParticularItemPress : function () {
		console.log("do something for this particular item");
	},

	onThatParticularItemPress : function () {
		console.log("do something for that particular item");
	},

	loadData : function () {
		var exampleList = {
		  data : [
		    {
		      title : "Text 1",
		      number : "123"
		    },
		    {
		      title : "Text 2",
		      number : "456"
		    },
		    {
		      title : "Text 3",
		      number : "789"
		    }
		  ]
		};

		var jExampleList = new sap.ui.model.json.JSONModel(exampleList);
		sap.ui.getCore().setModel(jExampleList, "exampleList");
	}
});
