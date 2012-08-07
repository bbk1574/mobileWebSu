Ext.application({
	name: "MyApp",
	launch: function(){
		var homeView = Ext.create("Ext.Panel", {
			style: "background-color: #ff0000"
		});
		
		var loginView = Ext.create("Ext.Panel", {
			style: "background-color: #00ff00"
		});
		
		var listView = Ext.create("Ext.Panel", {
			style: "background-color: #0000ff"
		});
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			items: [
				{
					text:"HomeView", ui: "confirm",
					handler: function(btn, event) {
						rootPanel.getLayout().setAnimation({type:"slide", direction:"right"});
						rootPanel.setActiveItem(0);
					}
				},
				{
					text:"LoginView", ui: "confirm",
					handler: function(btn, event) {
						rootPanel.getLayout().setAnimation({type:"slide", direction:"up"});
						rootPanel.setActiveItem(1);
					}
				},
				{
					text:"ListView", ui: "confirm",
					handler: function(btn, event) {
						rootPanel.getLayout().setAnimation("pop");
						rootPanel.setActiveItem(listView);
					}
				}
			]
		});
			
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "card",
			items: [toolbar, homeView, loginView ]
		});
		Ext.Viewport.add(rootPanel);
	}
});