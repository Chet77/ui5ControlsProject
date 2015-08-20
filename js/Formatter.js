var Formatter = {
		checkdate:function (value){
			var a = value.substr(0,2);
			var b = value.substr(3,2);
			var c = value.substr(6,4);
			var d = Date.UTC(c,b,a);
			return d;
		},
		
		actionValue:function(val){
			return val.text; 
		}
};