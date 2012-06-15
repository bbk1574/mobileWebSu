Ext.Loader.setConfig({enabled: true});
Ext.application({
	name: "MyApp",
	launch: function(){
		var button = Ext.create("Ext.Button", {
			text: "Add",
			handler: function(btn, event){
				rootPanel.add(
					Ext.create("Ext.Button", {
						text: "remove",
						handler: function(btn, event){
							rootPanel.remove(btn, true);
						}
					})
				);
			}
		});
		
		rootPanel = Ext.create("Ext.Panel", {
			items: [ button]
		});
		
		Ext.Viewport.add(rootPanel);
	}
})