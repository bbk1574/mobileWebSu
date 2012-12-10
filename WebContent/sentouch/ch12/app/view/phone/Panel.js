Ext.define("Phonem.view.phone.Panel", {
	extend: "Ext.Panel",
	xtype: "phonepanel",
	requires: ["Ext.TitleBar"],
	config: {
		layout: "card",
		items: [
			{
				xtype: "titlebar",
				docked: "top",
				items: [
					{action: "main", text: "홈", ui: "confirm", align: "left", iconCls: "home", iconMask: true },
					{action: "list", text: "목록", ui: "confirm", align: "left"},
					{action: "create", text: "생성", ui: "confirm", align: "right"},
					{action: "update", text: "수정", ui: "confirm", align: "right"},
					{action: "delete", text: "삭제", ui: "confirm", align: "right"}
				]
			}
		]
		
	}
});