Ext.Loader.setConfig({enabled: true});
Ext.application({
	name: "MyApp",
	launch: function(){
		var dockedItems1 = Ext.create("Ext.Panel", {
			docked: "top",
			style: "background-color: red;",
			html: "top"
		});
		
		
		var dockedItems2 = Ext.create("Ext.Panel", {
			docked: "left",
			style: "background-color: gray;",
			html: "left"
		});
		
		
		var dockedItems3 = Ext.create("Ext.Panel", {
			docked: "bottom",
			style: "background-color: yellow;",
			html: "bottom"
		});
		
		
		var dockedItems4 = Ext.create("Ext.Panel", {
			docked: "right",
			style: "background-color: green;",
			html: "right"
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [dockedItems1, dockedItems2, dockedItems3, dockedItems4 ]
		});
		Ext.Viewport.add(rootPanel);
	}
})