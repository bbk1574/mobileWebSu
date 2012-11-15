Ext.define("Phonem.view.Main", {
    extend: 'Ext.Panel',
    xtype: "main",
    
    requires: ['Ext.TitleBar'],
    
    config: {
    	items: [
    		{
    			xtype: "titlebar",
    			docked: "top",
    			title: "Sencha Touch Demo"
    		},
    		{ xtype: "spacer", height: "30px" },
    		{
    			xtype: "panel",
    			layout: { type: "hbox", pack: "center" },
    			items: [
    				{
    					xtype: "spacer"
    				},
    				{
    					xtype: "button",
    					action: "loginForm",
    					text: "로그인",
    					width: "40%",
    					iconCls: "settings",
    					iconMask: true
    				},
    				{
    					xtype: "button",
    					action: "logout",
    					text: "로그아웃",
    					width: "40%",
    					iconCls: "reply",
    					iconMask: true,
    					hidden: true
    				},
    				{xtype: "spacer"},
    				{
    					xtype: "button",
    					action: "phoneList",
    					text: "폰목록",
    					ui: "action",
    					width: "40%",
    					iconCls: "search",
    					iconMask: true
    				},
    				{xtype: "spacer"}
    				
    			]
    		}
    	]
    },
    user:null,
    setUser:function(user){
    	this.user = user;
    },
    getUser:function() {
    	return this.user;
    }
    
    
   
});