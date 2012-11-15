Ext.define("MyApp.view.desktopprofile.Main", {
	extend: 'Ext.tab.Panel', 
	xtype: "main",		
	id: "main",
	config: {
		tabBarPosition: 'bottom',        
		items: [
			{ xtype: "titlebar", docked:"top", title:"MyApp"},
			{ xtype: "menulistview", docked:"left", width:200 },
			{ xtype: "homeview" },
			{ xtype: "loginformview" },
			{ xtype: "phonelistview" }
		]
	}
});