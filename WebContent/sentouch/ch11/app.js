//<debug>
Ext.Loader.setPath({
	"Ext": "sdk/src"
});
//</debug>

Ext.application({
    profiles: ["DesktopProfile", "PhoneProfile"],
	views: ["HomeView", "LoginFormView", "PhoneListView"],
    models: ["Phone"],
	stores: ["PhoneStore"],
	controllers: ["LoginController", "PhoneController"],

	name: "MyApp",

	requires: [
		"Ext.MessageBox"
	],

	icon: {
		57: "resources/icons/Icon.png",
		72: "resources/icons/Icon~ipad.png",
		114: "resources/icons/Icon@2x.png",
		144: "resources/icons/Icon~ipad@2x.png"
	},
    
	phoneStartupScreen: "resources/loading/Homescreen.jpg",
	tabletStartupScreen: "resources/loading/Homescreen~ipad.jpg",

	launch: function() {
		// Destroy the #appLoadingIndicator element
		Ext.fly("appLoadingIndicator").destroy();
	},

	onUpdated: function() {
		Ext.Msg.confirm(
			"Application Update",
			"This application has just successfully been updated to the latest version. Reload now?",
			function() {
				window.location.reload();
			}
		);
	}
});
