Ext.application({
	name:"MyApp",
	launch: function(){
		var panel1 = Ext.create("Ext.Panel", {
			style:"background-color:#ff0000",
			html: "Ext.create() 이용"
		});
		
		var panel2 = {
			xtype:"panel",
			style:"background-color:#ff0000",
			html: "xtype 이용"
		};
		

		var rootPanel = Ext.create("Ext.Panel", {
			items: [ panel1, panel1, panel2, panel2 ]
		});
		Ext.Viewport.add(rootPanel);
	}
});