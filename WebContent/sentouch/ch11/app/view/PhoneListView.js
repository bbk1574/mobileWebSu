Ext.define("MyApp.view.PhoneListView", {
	extend:"Ext.Panel",
	xtype:"phonelistview",
	requires: [ "Ext.TitleBar", "Ext.dataview.List" ],
	config:{
		title: "Phone",
		iconCls: "settings",
		layout: "fit",
		items:[
			{
				xtype:"titlebar",
				docked:"top",
				title:"Phone List"
			},
			{
				xtype:"list",
				itemTpl:[
					"<div style='width:100%;'>",
						"<table  style='width:100%;'>",
							"<tr>",
								"<td style='width:50px; padding-left:5px'>{pno}</td>",
								"<td style='padding-left:5px'>{pname}</td>",
								"<td style='text-align:right;padding-left:5px'>",
									"<img style='width:30px;height:50px;' src='resources/images/{pimage}' border='0'/>",
								"</td>",
							"</tr>",
						"</table>",
					"</div>"
				]
			}
		]
    }
});
