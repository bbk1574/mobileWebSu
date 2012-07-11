Ext.application({
	name:"MyApp",
	launch: function(){
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			items: [
				new Ext.Button({text:"버튼1"}),
				{xtype:"button", text:"버튼2"},
				{text:"버튼3"}
			]
		});
		
		var panel1 = Ext.create("Ext.Panel", {
			style:"background-color:#ff0000",
			items:{ xtype:"button", text:"버튼4", width:100}
		});
		
		var panel2 = {
			style:"background-color:#00ff00",
			items:{ xtype:"button", text:"버튼5", width:100}
		};
		
		var panel3 = {
			style:"background-color:#0000ff",
			items:{ xtype:"button", text:"버튼6", width:100}
		};
		
		

		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar, panel1, panel2, panel3]
		});
		Ext.Viewport.add(rootPanel);
	}
});