Ext.application({
	name: "MyApp",
	launch: function(){
		var carousel1 = Ext.create("Ext.carousel.Carousel", {
			items: [
				{
					style: "background-color: #ff0000"
				},
				{
					style: "background-color: #00ff00"
				},
				{
					style: "background-color: #0000ff"
				}
			]
		});
		
		var carousel2 = {
			xtype:"carousel",
			ui:"light",
			direction:"vertical",
			items: [
				{
					style: "background-color: magenta"
				},
				{
					style: "background-color: yellow"
				},
				{
					style: "background-color: orange"
				}
			]
		};
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: {
				type:"vbox",
				align:"stretch"
			},
			items: [ carousel1, carousel2 ]
		});
		Ext.Viewport.add(rootPanel);
	}
});