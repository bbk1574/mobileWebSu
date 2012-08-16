Ext.application({
	name: "MyApp",
	launch: function(){
		var button1 = Ext.create("Ext.Button", {
			text:"Button1",
			ui:"confirm",
			handler: function(btn, event){
				Ext.Msg.alert("알림", "Button1", Ext.emptyFn);
			}
		});
		
		var button2 = Ext.create("Ext.Button", {
			text:"Button2",
			ui:"confirm",
			listeners: {
				tap: function(btn, event){
					Ext.Msg.alert("알림", "Button2", Ext.emptyFn);
				}
			}
		});
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked:"top",
			items: [button1, button2]
		})
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "card",
			items: [toolbar ]
		});
		Ext.Viewport.add(rootPanel);
	}
});