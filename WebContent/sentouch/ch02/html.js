Ext.Loader.setConfig({enabled: true});
Ext.application({
	name: "MyApp",
	launch: function(){
		var panel1 = Ext.create("Ext.Panel", {
			style: "background-color: #ff0000",
			items: [Ext.create("Ext.Button", { text: "버튼1", width: 100	})]
		});
		
		var panel2 = Ext.create("Ext.Panel", {
			style: "background-color: #ff0000",
			html: "<button style='width:100px'>버튼2</button>"
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [panel1, panel2]
		});
		Ext.Viewport.add(rootPanel);
	}
});