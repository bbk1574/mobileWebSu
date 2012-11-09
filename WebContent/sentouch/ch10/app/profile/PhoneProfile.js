Ext.define('MyApp.profile.PhoneProfile', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
    	name: "phoneprofile",
        views: ["Main"]
     },
    
    //this profile will be activated if we detect we're running on a PhoneProfile
    isActive: function(app) {
        return (Ext.os.deviceType == "Phone");
    },
    launch: function() {
    	Ext.Viewport.add(Ext.create("MyApp.view.phoneprofile.Main"));
    }
});