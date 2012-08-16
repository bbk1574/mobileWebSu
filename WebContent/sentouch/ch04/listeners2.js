Ext.application({
	name: "MyApp",
	launch: function(){
		var button = Ext.create("Ext.Button", {
			text:"Button",
			ui: "confirm",
			listeners: {
				click: {
					fn: function(event){
						Ext.Msg.alert("알림", "Button 클릭 이벤트 처리", Ext.emptyFn);
					},
					element: "element"
				}
			}
		});
		
		var panel = Ext.create("Ext.Panel", {
			style: "background-color:orange",
			flex:1,
			listeners: {
				fn: function(event) {
					Ext.Msg.alert("알림", "Panel 클릭 이벤트 처리", Ext.emptyFn);
				},
				element: "innerElement"
			}
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: {type:"vbox", align: "stretch"},
			items: [button, panel]
		});
		Ext.Viewport.add(rootPanel);
	}
});