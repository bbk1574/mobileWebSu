Ext.application({
	name: "MyApp",
	launch: function() {
		var jsonpProxy = Ext.create("Ext.data.proxy.JsonP", {
			url : "http://172.16.1.137:8080/mobileWebSu/sentouch/ch07/jsonp_data.jsp",
			callbackKey: "serverKey",
			reader: {
				type: "json"
			}
		});
		
		Ext.define("MyApp.Phone", {
			extend: "Ext.data.Model",
			config: {
				fields: ["pno", "pname", "pimage"],
				proxy: jsonpProxy
			}
		});
		
		var btnRead1 = Ext.create("Ext.Button", {
			text: "pno:'p1'",
			ui: "confirm",
			handler: function(button, event) {
				readData("p1");
			}
		});
		
		var btnRead2 = Ext.create("Ext.Button", {
			text: "pno:'p2'",
			ui: "confirm",
			handler: function(button, event) {
				readData("p2");
			}
		});
		
		var btnRead3 = Ext.create("Ext.Button", {
			text: "pno:'p3'",
			ui: "confirm",
			handler: function(button, event) {
				readData("p3");
			}
		});
		
		function readData(pno){
			MyApp.Phone.load(null, {
				params: {pno:pno},
				success: function(model) {
					phone = model;
					panel.setData(phone.data);
					Ext.Msg.alert("알림", "읽기 성공", Ext.emptyFn);
				},
				failure: function() {
					Ext.Msg.alert("알림", "서버 오류 또는 서버 접속 실패", Ext.emptyFn);
				}
			});
		}
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			items: [btnRead1, btnRead2, btnRead3]
		});
		
		var template = new Ext.XTemplate(
			"<table style='width:100%;border:1px;border-bottom-style:solid;'>",
			"<tr>",
			"<td style='width:50px; padding:5px'>{pno}</td>",
			"<td style='padding-left:5px'>{pname}</td>",
			"<td style='text-align:right;padding:5px'>",
			"<img style='width:30px;height:50px;' src='../image/{pimage}' border='0' />",
			"</td>",
			"</tr>",
			"</table>"
		);
		
		var panel = Ext.create("Ext.Panel", {
			tpl: template
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [ toolbar, panel]
		});
		Ext.Viewport.add(rootPanel);
	}
});