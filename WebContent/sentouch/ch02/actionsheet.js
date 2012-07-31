Ext.application({
	name: "MyApp",
	launch: function(){
		var actionSheet = Ext.create("Ext.ActionSheet", {
			items: [
				{ text:"Delete", ui: "decline" },
				{ text:"Save"},
				{ text:"Cancel", ui:"confirm", handler: function() { actionSheet.hide(); } }
			],
			hidden: true
		});
		Ext.Viewport.add(actionSheet);
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked:"top",
			items: [
				{
					text: "showActionSheet",
					ui: "confirm",
					handler: function() {
						actionSheet.show();
					}
				}
			]
		});	
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar]
		});
		Ext.Viewport.add(rootPanel);
	}
});