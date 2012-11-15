Ext.define("MyApp.profile.DesktopProfile", {
    extend: "Ext.app.Profile",

	config: {
		name: "desktopprofile",
		views: ["Main", "MenuListView"],
		controllers: ["MainController"]
	},

	isActive: function(app) {
		return (Ext.os.deviceType == "Desktop");
	},

	launch: function() {
		Ext.Viewport.add(Ext.create("MyApp.view.desktopprofile.Main"));
	}
});
