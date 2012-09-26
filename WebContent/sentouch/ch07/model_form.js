Ext.application({
	name: "MyApp",
	launch: function(){
		Ext.define("MyApp.User", {
			extend: "Ext.data.Model",
			config: {
				fields: ["name", "age", "phone"]
			}
		});
		
		var formPanel = Ext.create("Ext.form.Panel", {
			items: [
				{ 
					xtype: "fieldset", 
					items: [
						{ xtype:"textfield", name: "name", label: "이름" },
						{ xtype:"numberfield", name: "age", label: "나이" },
						{ xtype:"textfield", name: "phone", label: "전화" }
					]
				}
			]
		});
		
		var user = Ext.create("MyApp.User", {
			name: "홍길동",
			age: 35,
			phone: "010-123-1234"
		});
		
		formPanel.setRecord(user);
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "fit",
			items: [formPanel]
		});
		Ext.Viewport.add(rootPanel);
	}
})