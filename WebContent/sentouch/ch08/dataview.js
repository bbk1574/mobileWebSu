Ext.application({
	name: "MyApp",
	launch: function() {
		Ext.define("MyApp.Phone", {
			extend: "Ext.data.Model",
			config: {
				fields: [ "pno", "pname", "pimage", "pstar"]
			}
		});

		var phoneStore = Ext.create("Ext.data.Store", {
			model: "MyApp.Phone",
			data: [
				{
					"pno": "p1",
					"pname": "갤럭시 A",
					"pimage": "phone01.png",
					"pstar": "star3.png"
				},
				{
					"pno": "p2",
					"pname": "갤럭시 A",
					"pimage": "phone02.png",
					"pstar": "star5.png"
				},
				{
					"pno": "p3",
					"pname": "갤럭시 A",
					"pimage": "phone03.png",
					"pstar": "star2.png"
				},
				{
					"pno": "p4",
					"pname": "갤럭시 A",
					"pimage": "phone04.png",
					"pstar": "star4.png"
				}
			]
		});
		
		var phoneTemplate = new Ext.XTemplate(
			"<div style='width:100%;margin-top:10px;'>",
			"<table style='width:100%;'>",
			"<tr>",
			"<td style='width:30px;padding:5px'>{pno}</td>",
			"<td style='width:150px;text-align:left;padding:5px'>",
			"<a href='#'>{pname}</a>",
			"</td>",
			"<td style='width:100px;text-align:left;padding:5px'>",
			"<img src='../image/{pstar}' border='0'/>",
			"</td>",
			"<td style='text-align:right;padding-right:10px'>",
			"<img style='width:30px;height:50px;' src='../image/{pimage}'/>",
			"</td>",
			"</tr>",
			"</table>",	
			"<hr/>",
			"</div>"
		);
		
		var phoneList = Ext.create("Ext.dataview.DataView", {
			store: phoneStore,
			itemTpl: phoneTemplate
		});
		
		var navBar = Ext.create("Ext.TitleBar", {
			docked: "top",
			title: "폰 목록"
		});
					
		var rootPanel = Ext.create("Ext.Panel", {
			layout:"fit",
			items: [ navBar, phoneList]
		});
		Ext.Viewport.add(rootPanel);
	}
});