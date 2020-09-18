sap.ui.define(["sap/ui/core/mvc/Controller",
                "sap/m/MessageToast"], function (Controller, MessageToast) {
	 Controller.extend("kr.ui5_tutorials.controller.App", {
	 	onPress: function(){
	 		MessageToast.show("Hello");
	 	}
	});
	}); 