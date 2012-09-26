Ext.application({
	name: "MyApp",
	launch: function() {
		if (window.localStorage){
			window.localStorage.clear();
			window.localStorage.setItem("phone", '1,2,3,4');
			window.localStorage.setItem("phone-counter", 4);
			window.localStorage.setItem("phone-1", 
				'{"id":1, "pno":"p1", "pname":"갤럭시A", "pimage":"phone01.png"}');
			window.localStorage.setItem("phone-2", 
				'{"id":2, "pno":"p2", "pname":"갤럭시 에이스", "pimage":"phone02.png"}');
			window.localStorage.setItem("phone-3", 
				'{"id":3, "pno":"p3", "pname":"갤럭시 지오", "pimage":"phone03.png"}');
			window.localStorage.setItem("phone-4", 
				'{"id":4, "pno":"p4", "pname":"갤럭시 호핀", "pimage":"phone04.png"}');
			window.localStorage.setItem("phone-5", 
				'{"id":5, "pno":"p5", "pname":"갤럭시 호핀", "pimage":"phone05.png"}');
				
		}
		
		var localStorageProxy = Ext.create("Ext.data.proxy.LocalStorage", {
			id: "phone"
		});
		
		Ext.define("MyApp.Phone", {
			extend: "Ext.data.Model",
			config: {
			 	fields:	["id", "pno", "pname", "pimage" ],
				proxy: localStorageProxy
			}
		});
		
		var btnRead1 = Ext.create("Ext.Button", {
			text: "id:1",
			ui: "confirm",
			handler: function(button, event){
				readData(1);
			}
		});
		
		var btnRead2 = Ext.create("Ext.Button", {
			text: "id:2",
			ui: "confirm",
			handler: function(button, event){
				readData(2);
			}
		});
		
		var btnRead3 = Ext.create("Ext.Button", {
			text: "id:3",
			ui: "confirm",
			handler: function(button, event){
				readData(3);
			}
		});
		
		var btnRead4 = Ext.create("Ext.Button", {
			text: "id:4",
			ui: "confirm",
			handler: function(button, event){
				readData(4);
			}
		});
		
		var btnRead5 = Ext.create("Ext.Button", {
			text: "id:5",
			ui: "confirm",
			handler: function(button, event){
				readData(5);
			}
		});
		
		function readData(id) {
			MyApp.Phone.load(id, {
				success: function(model){
					var phone = model;
					panel.setData(phone.data);
				},
				failure: function() {
					Ext.Msg.alert("알림", "검색된 데이터가 없음", Ext.emptyFn);
				}
			});
		};
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			items: [btnRead1, btnRead2, btnRead3, btnRead4, btnRead5 ]
		});
		
		var template = new Ext.XTemplate(
			"<table style='width:100%;border:1px;border-bottom-style:solid;'>",
			"<tr>",
			"<td style='width:50px; padding:5px'>{pno}</td>",
			"<td style='padding-left:5px'>{pname}</td>",
			"<td style='text-align:right;padding:5px'>",
			"<img style='width:30px;height:50px;' src='../image/{pimage}' border='0'>",
			"</td>",
			"</tr>",
			"</table>"
		);
		
		var panel = Ext.create("Ext.Panel", {
			tpl: template
		});
		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar, panel]
		});
		Ext.Viewport.add(rootPanel);
	}
});