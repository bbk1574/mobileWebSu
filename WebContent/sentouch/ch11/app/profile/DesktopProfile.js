Ext.define('MyApp.profile.DesktopProfile', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
    	name: "desktopprofile",
        views: ["Main", "MenuListView"],
        controllers: ["MainController"]
    },
    
    //this profile will be activated if we detect we're running on a DesktopProfile
    isActive: function(app) {
        return Ext.os.deviceType == "Desktop";
    },
    launch: function() {
    	Ext.Viewport.add(Ext.create("MyApp.view.desktopprofile.Main"));
    }
});
