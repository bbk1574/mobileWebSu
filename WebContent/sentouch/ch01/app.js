Ext.Loader.setConfig({enabled: true});
Ext.application({
	name: "MyApp",
	launch:function(){
		var homeView = Ext.create("HomeView");
		var loginView = Ext.create("LoginView");
		var listView = Ext.create("ListView");
		
		var tabPanel = Ext.create("Ext.tab.Panel", {
			items: [ homeView, loginView, listView] 
		});
		Ext.Viewport.add(tabPanel);
	}
})