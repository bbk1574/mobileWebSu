Ext.Loader.setConfig({ enabled: true });
Ext.application({
		name: "MyApp",
		launch: function() {
			Ext.define("MyApp.User", {
				extend: "Ext.data.Model",
				config: {
					fields: [ "name", "age",	"phone" ]
				}
		});
	
		var btnCreate = Ext.create("Ext.Button", {
			text: "User 생성",
			ui: "confirm",
			handler: function(button, event) {
				user = Ext.create("MyApp.User", {
					name:"홍길동", 
					age:35, 
					phone:"010-123-1234"
				});
			showUser();
			}
		});
	
		var btnUpdate = Ext.create("Ext.Button", {
			text: "User 수정",
			ui: "confirm",
			handler: function(button, event) {
				if(user!=null) {
					user.set("age", 30);
					user.data.phone = "010-789-2345";
					showUser();
				}
			}
		});
	
		var template = new Ext.XTemplate(
			"<div style='width:100%'>",
			"이름: {name}</br>",
			"나이: {age}</br>",
			"전화: {phone}",
			"</div>"
		);
		
		function showUser() {
			panel.setData(null);
			panel.setData(user.data);
		}
	
		var user = null;
	
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			items: [ btnCreate, btnUpdate ]
		});
	
		var panel = Ext.create("Ext.Panel", {
			tpl: template
		});
	
		var rootPanel = Ext.create("Ext.Panel", {
			items: [ toolbar, panel ]
		});
		Ext.Viewport.add(rootPanel);
	}
});