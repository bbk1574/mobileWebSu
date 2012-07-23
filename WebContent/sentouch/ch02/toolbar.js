Ext.application({
	name: "MyApp",
	launch: function(){
		var toolbar1 = {
			xtype:"toolbar",
			docked:"top",
			ui:"light",
			title:"My Toolbar",
			items: [
				{ text:"back", ui:"back" },
				{ xtype:"spacer"},
				{text:"forward", ui:"forward"}
			]
		};
		
		var toolbar2 = Ext.create("Ext.Toolbar", {
			docked:"bottom",
			scrollable:"horizontal",
			items: [
				{ text: 'info', iconCls: 'info', badgeText:"2", iconMask:true },
				{ text: 'favorites', iconCls: 'locate', iconMask:true, ui:"decline" },
				{ text: 'settings', iconCls: 'settings', iconMask:true, ui:"confirm-round" },			    
				{ text: 'home', iconCls: 'home', iconMask:true, ui:"round" },
				{ text: 'locate', iconCls: 'favorites', iconMask:true, ui:"action", iconAlign:"right" },
				{ iconCls: 'organize', iconMask:true, ui:"action-round" },
				{ text: 'bookmarks', iconCls: 'bookmarks', iconMask:true },
				{ text: 'download', iconCls: 'download', iconMask:true },
				{ text: 'more', iconCls: 'more', iconMask:true },
				{ text: 'search', iconCls: 'search', iconMask:true },
				{ text: 'team', iconCls: 'team', iconMask:true },
				{ text: 'time', iconCls: 'time', iconMask:true },
				{ text: 'user', iconCls: 'user', iconMask:true },   
				{ text: 'action', iconCls: 'action', iconMask:true },
				{ text: 'add', iconCls: 'add', iconMask:true },
				{ text: 'arrow_up', iconCls: 'arrow_up', iconMask:true },
				{ text: 'arrow_right', iconCls: 'arrow_right', iconMask:true },
				{ text: 'arrow_down', iconCls: 'arrow_down', iconMask:true },
				{ text: 'arrow_left', iconCls: 'arrow_left', iconMask:true },
				{ text: 'compose', iconCls: 'compose', iconMask:true },
				{ text: 'delete', iconCls: 'delete', iconMask:true },
				{ text: 'refresh', iconCls: 'refresh', iconMask:true },
				{ text: 'reply', iconCls: 'reply', iconMask:true },
				{ text: 'star', iconCls: 'star', iconMask:true },
				{ text: 'trash', iconCls: 'trash', iconMask:true }
			]
		})
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar1, toolbar2]
		});
		Ext.Viewport.add(rootPanel);
	}
});