Ext.application({
	name: "MyApp",
	launch: function() {
		Ext.define("MyApp.Phone", {
			extend: "Ext.data.Model",
			config: {
				fields: [ "pno", "pname", "pimage"]
			}
		});
		
		var phoneStore = Ext.create("Ext.data.Store", {
			model: "MyApp.Phone",
			data: [
				{
					pno: "p1",
					pname: "갤럭시A",
					pimage: "phone01.png"
				},
				{
					pno: "p2",
					pname: "갤럭시 에이스",
					pimage: "phone02.png"
				},
				{
					pno: "p3",
					pname: "갤럭시 지오",
					pimage: "phone03.png"
				},
				{
					pno: "p4",
					pname: "갤럭시 호핀",
					pimage: "phone04.png"
				}
			]
		});
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			title: "폰 목록"
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar]
		});
		Ext.Viewport.add(rootPanel);
		
		var itemTpl = new Ext.XTemplate(
			"<table style='width:100%;border:1px;border-bottom-style:solid;'>",
			"<tr>",
			"<td style='width:50px; padding:5px;'>{pno}</td>",
			"<td style='padding-left:5px;'>{pname}</td>",
			"<td style='text-align:right;padding:5px'>",
			"<img style='width:30px;height:50px;' src='../image/{pimage}' border='0'>",
			"</td>",
			"</tr>",
			"</table>"
		);
		
		phoneStore.each(function(model){
			var phoneItem = Ext.create("Ext.Panel", { tpl: itemTpl});
			phoneItem.setData(model.data);
			rootPanel.add(phoneItem);
		});
	}
});