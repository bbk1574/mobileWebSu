Ext.define("MyApp.view.phoneprofile.Main", {
    extend: 'Ext.tab.Panel',
	xtype: "main",
	id: "main",
	config: {
		tabBarPosition: 'bottom',
		items: [
			{ xtype: "homeview" },
			{ xtype: "loginformview" },
			{ xtype: "phonelistview" }
		]
	}
});