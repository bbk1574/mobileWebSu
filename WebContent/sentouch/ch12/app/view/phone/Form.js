Ext.define("Phonem.view.phone.Form", {
	extend: "Ext.form.Panel",
	xtype: "phoneform",
	requires: [
		"Ext.form.FieldSet",
		"Ext.field.Text",
		"Ext.field.Select",
		"Ext.field.Number"
	],
	config: {
		items: [
			{
				xtype: "fieldset", 
				items: [
					{xtype:"textfield", label: "pno", name: "pno"},
					{xtype:"textfield", label: "pname", name: "pname"},
					{xtype:"selectfield", label: "pimage", name: "pimage", options: [
						{text: "phone05.png", value: "phone05.png"},
						{text: "phone06.png", value: "phone06.png"},
						{text: "phone07.png", value: "phone07.png"}
					]},
					{xtype:"textfield", label: "pcompany", name: "pcompany"},
					{xtype:"numberfield", label: "pprice", name: "pprice"},
					{xtype:"selectfield", label: "pcolor", name: "pcolor", options: [
						{text: "검정", value: "검정"},
						{text: "흰색", value: "흰색"}
					]}
				]
			}
		]
	}
});