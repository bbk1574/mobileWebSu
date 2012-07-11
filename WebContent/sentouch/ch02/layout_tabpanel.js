Ext.application({
	name:"MyApp",
	launch: function(){
		var card1 = Ext.create("Ext.Panel", {
			title:"Red",
			style:"background-color:#ff0000"
		});
		
		var card2 = Ext.create("Ext.Panel", {
			title:"Green",
			style:"background-color:#00ff00"
		});
		
		var card3 = Ext.create("Ext.Panel", {
			title:"Blue",
			style:"background-color:#0000ff"
		});
		

		var rootPanel = Ext.create("Ext.tab.Panel", {
			items: [ card1, card2, card3 ]
		});
		Ext.Viewport.add(rootPanel);
	}
});