Ext.define("MyApp.view.desktopprofile.MenuListView", {
	extend: "Ext.dataview.List",
	xtype: "menulistview",
	
	config: {
		itemTpl: "{text}",
		store: {
			fields: ["text"],
			data: [
				{text: "Home"},
				{text: "Login"},
				{text: "Phone"}
			]
		},
		style: "background-color:#ff9900"
	}
})