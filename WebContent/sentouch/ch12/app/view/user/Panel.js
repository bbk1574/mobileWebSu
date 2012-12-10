Ext.define("Phonem.view.user.Panel", {
	extend: "Ext.Panel",
	xtype: "userpanel",
	requires: ["Ext.TitleBar"],
	config: {
		layout: "card",
		items: [
			{
				xtype: "titlebar",
				docked: "top",
				items: [
					{action: "main", text: "홈", iconCls: "home", iconMask: true }
				]
			}
		]
		
	}
})