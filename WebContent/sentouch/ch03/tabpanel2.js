Ext.application({
	name: "MyApp",
	launch: function(){
		var homeView = Ext.create("Ext.Panel", {
			title:"Home",
			iconCls:"home",
			style: "background-color: #ff0000"
		});
		
		var loginView = Ext.create("Ext.Panel", {
			title:"Login",
			iconCls:"user",
			style: "background-color: #00ff00"
		});
		
		var listView = Ext.create("Ext.Panel", {
			title:"List",
			iconCls:"settings",
			style: "background-color: #0000ff"
		});
	
		var rootPanel = Ext.create("Ext.tab.Panel", {
			ui:"light",
			tabBarPosition:"bottom",
			items: [ homeView, loginView, listView ]
		});
		Ext.Viewport.add(rootPanel);
	}
});