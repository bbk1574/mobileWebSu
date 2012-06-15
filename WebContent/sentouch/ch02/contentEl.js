Ext.Loader.setConfig({enabled: true});
Ext.application({
	name: "MyApp",
	launch: function(){
		var panel1 = Ext.create("Ext.Panel", {
			style: "background-color: #ff0000",
			contentEl: "panelContent"
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [panel1 ]
		});
		Ext.Viewport.add(rootPanel);
	}
});