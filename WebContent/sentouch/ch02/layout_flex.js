Ext.application({
	name: "MyApp",
	launch: function(){
		var item1 = Ext.create("Ext.Panel", {
			flex: 1,
			style:"background-color:red; color:white;"
		});
		
		var item2 = Ext.create("Ext.Panel", {
			flex: 2,
			style:"background-color:green; color:white;"
		});
		
		var item3 = Ext.create("Ext.Panel", {
			flex: 1,
			style:"background-color:blue; color:white;"
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: { type:"hbox", align:"stretch", pack:"center"},
			items: [ item1, item2, item3]
		});
		Ext.Viewport.add(rootPanel);
	}
});