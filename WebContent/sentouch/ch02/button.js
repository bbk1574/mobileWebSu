Ext.application({
	name: "MyApp",
	launch: function(){
		item1 = {
			layout:"hbox",
			items: [
				{
					xtype:"button",
					ui:"normal",
					text:"normal",
					iconCls:"action",
					iconMask:true,
					handler:function(){
						Ext.Msg.alert("Message", "Hi~~", Ext.emptyFn);
					}
				},
				{
					xtype:"button", ui:"round", text:"round"
				},
				{
					xtype:"button", ui:"small", text:"small"
				}
			]
		};
		
		item2 = {
			layout:"hbox",
			items: [
				{
					xtype:"button",
					ui:"decline",
					text:"decline",
					iconCls:"home",
					iconMask:true
				},
				{
					xtype:"button", ui:"decline-round", text:"decline-round"
				},
				{
					xtype:"button", ui:"decline-small", text:"decline-small"
				}
			]
		};
		
		item3 = {
			layout:"hbox",
			items: [
				{
					xtype:"button",
					ui:"confirm",
					text:"confirm",
					iconCls:"locate",
					iconMask:true,
					badgeText:"2"
				},
				{
					xtype:"button", ui:"confirm-round", text:"confirm-round"
				},
				{
					xtype:"button", ui:"confirm-small", text:"confirm-small"
				}
			]
		};
		
		item4 = {
			layout:"hbox",
			items: [
				{
					xtype:"button",
					ui:"action",
					text:"action",
					iconCls:"favorites",
					iconMask:true
				},
				{
					xtype:"button", ui:"action-round", text:"action-round"
				},
				{
					xtype:"button", ui:"action-small", text:"action-small"
				}
			]
		};
		
		item5 = {
			layout:"hbox",
			items: [
				{
					xtype:"button",
					ui:"back",
					text:"back",
					iconCls:"arrow_left",
					iconMask:true
				},
				{
					xtype:"button", ui:"forward", text:"forward", iconCls:"arrow_right", iconMask:true, iconAlign:"right"
				}
			]
		};
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: { type:"vbox", align:"middle", pack:"justify"},
			items: [ item1, item2, item3, item4, item5]
		});
		Ext.Viewport.add(rootPanel);
	}
});