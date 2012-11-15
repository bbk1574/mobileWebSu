Ext.define("Phonem.view.user.LoginForm", {
	extend: "Ext.form.Panel",
	xtype: "userloginform",
	
	requires: [
		"Ext.form.FieldSet",
		"Ext.field.Text",
		"Ext.field.Password"
	],
	config: {
		items: [
			{
				xtype:"fieldset",
				title: "Login",
				instructions: "You mast type user id and password",
				items: [
					{ xtype: "textfield", name:"uid", value: "user", label: "ID" },
					{ xtype: "passwordfield", name: "upassword", value: "12345", label: "Passwod" }
				]
			},
			{xtype: "spacer", height: "20px" },
			{xtype: "button", action: "login", text:"로그인", ui: "confirm" } 
		]
	}
});