Ext.Loader.setConfig({enabled: true});
Ext.application({
	name: "MyApp",
	launch: function(){
		var item1 = Ext.create("Ext.Panel", {
			style: "background-color: red;",
			html: "Red"
		});
		
		var item2 = Ext.create("Ext.Panel", {
			style: "background-color: green;",
			html: "Green"
		});
		
		var item3 = Ext.create("Ext.Panel", {
			style: "background-color: blue;",
			html: "Blue"
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "default",
			items: [item1, item2, item3]
		});
		Ext.Viewport.add(rootPanel);
	}
});