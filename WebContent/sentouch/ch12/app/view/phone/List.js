Ext.define("Phonem.view.phone.List", {
	extend: "Ext.dataview.List",
	xtype: "phonelist",

	config: {
		itemTpl: [
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
});