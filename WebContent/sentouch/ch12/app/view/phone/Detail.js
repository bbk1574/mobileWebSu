Ext.define("Phonem.view.phone.Detail", {
	extend: "Ext.Panel",
	xtype: "phonedetail",
	config: {
		tpl: [
			"<div style='width:100%;'>",
				"<table  style='width:100%;'>",
					"<tr>",
						"<td style='width:30px;padding:10px;'>",
							"<img src='resources/images/{pimage}'/>",
						"</td>",
						"<td style='padding:10px;'>",
							"<table border='1' style='width:100%;'>",
								"<tr><td style='width:100px;padding:5px;'>pno</td><td>{pno}</td></tr>",
								"<tr><td style='width:100px;padding:5px;'>pname</td><td>{pname}</td></tr>",
								"<tr><td style='width:100px;padding:5px;'>pcompany</td><td>{pcompany}</td></tr>",
								"<tr><td style='width:100px;padding:5px;'>pprice</td><td>{pprice}</td></tr>",
								"<tr><td style='width:100px;padding:5px;'>pcolor</td><td>{pcolor}</td></tr>",								
							"</table>",
						"</td>",
				"</table>",
			"</div>"			
		]
		
	},
	
	phone:null,
	setPhone: function(phone){
		this.phone = phone;
		this.setData(phone.data);
	},
	getPhone: function(){
		return this.phone;
	}
});