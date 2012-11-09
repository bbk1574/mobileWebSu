Ext.define("MyApp.view.LoginFormView", {
	extend: "Ext.form.Panel",
	xtype: "loginformview",
	id: "loginformview",
	requires: [
		"Ext.form.FieldSet",
		"Ext.field.Text",
		"Ext.field.Password"
	],
	config: {
		title: "Login",
		iconCls: "user",
		items: [
			{
				xtype: "fieldset",
				title: "Login",
				instructions: "(mid and mpassword is required)",
				items: [
					{xtype: "textfield", name: "id", label: "Id"},
					{xtype: "passwordfield", name: "password", label: "Password" }
				]
			},
			{
				xtype: "button", id: "btnLogin", action: "login",
				text: "Login", ui: "confirm"
			}
		]
	}
});