Ext.Loader.setConfig({enabled: true});
Ext.application({
	name: "MyApp",
	launch: function(){
		var btn1 = Ext.create("Ext.Button", {
			text: "버튼1"
		});
		
		var btn2 = Ext.create("Ext.Button", {
			text: "버튼2"
		});
		
		var btn3 = Ext.create("Ext.Button", {
			text: "버튼3"
		});
		
		rootPanel = Ext.create("Ext.Panel", {
			layout: {
				type: "vbox",
				align: "middle",
				pack: "justify"
			},
			items: [ btn1, btn2, btn3]
		});
		
		Ext.Viewport.add(rootPanel);
	}
})