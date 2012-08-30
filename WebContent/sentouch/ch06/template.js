Ext.application({
	name: "MyApp",
	launch: function() {
		var template1 = new Ext.Template("<div style='width:100%'>{0} - {1}</div>");
		var template2 = new Ext.Template(
			"<div style='width:100%'>",
			"{name} - {kind}",
			"</div>"
		);
		
		var panel1 = Ext.create("Ext.Panel", {
			style: "background-color:#ffff00"
		});
		
		var panel2 = Ext.create("Ext.Panel", {
			style: "background-color:#ffff00"
		});
		
		template1.append(panel1.element, ["SenchaTouch", "Framework"]);
		template2.append(panel2.element, {name:"javaScript", kind:"Language"});
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [panel1, panel2]
		});
		Ext.Viewport.add(rootPanel);
	}
})