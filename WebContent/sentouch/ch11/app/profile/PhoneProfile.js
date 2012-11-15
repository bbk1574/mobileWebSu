Ext.define("MyApp.profile.PhoneProfile", {
	extend: "Ext.app.Profile",
    
	config: {
		name: "phoneprofile",
		views: ["Main"]
	},

	isActive: function(app) {
		return (Ext.os.deviceType == "Phone");
	},

	launch: function() {
		Ext.Viewport.add(Ext.create("MyApp.view.phoneprofile.Main"));
	}
});

