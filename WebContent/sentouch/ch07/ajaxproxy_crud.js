Ext.application({
	name: "MyApp",
	launch: function(){
		var ajaxProxy = Ext.create("Ext.data.proxy.Ajax", {
			api: {
				create: "crud_control.jsp?action=create",
				read: "crud_control.jsp?action=read",
				update: "crud_control.jsp?action=update",
				destroy: "crud_control.jsp?action=destroy"
			},
			reader: {type: "json"},
			writer: {type: "json"}
		});
		
		Ext.define("MyApp.Phone", {
			extend: "Ext.data.Model",
			config: {
				fields: ["pno", "pname", "pimage"],
				proxy: ajaxProxy
			}
		});
		
		var phone = null;
		
		var btnCreate = Ext.create("Ext.Button", {
			text: "생성",
			ui: "confirm",
			handler: function(button, event){
				phone = Ext.create("MyApp.Phone", {
					pno: "p5",
					pname:"갤럭시 New",
					pimage:"phone05.png"
				});
				phone.save({
					success: function(model){
						if(model.getProxy().getReader().rawData.result == "success") {
							Ext.Msg.alert("알림", "생성 성공(정상응답)", Ext.emptyFn);
						} else if(model.getProxy().getReader().rawData.result == "failure") {
							Ext.Msg.alert("알림", "생성 성공(정상응답)", Ext.emptyFn);
						} else {
							Ext.Msg.alert("알림", "서버 접속 실패", Ext.emptyFn);
						}
					},
					failure: function() {
						Ext.Msg.alert("알림", "서버 실행 오류", Ext.emptyFn);
					}
				});
			}
		});
		
		var btnRead = Ext.create("Ext.Button", {
			text: "읽기",
			ui: "confirm",
			handler: function(button, event){
				MyApp.Phone.load(null, {
					params: {pno:"p5"},
					success: function(model){
						console.log(model);
						if(model.getProxy().getReader().rawData.result == "success") {
							phone = model;
							rootPanel.add(panel);
							panel.setData(phone.data);
							console.log("데이터: " + phone);
							Ext.Msg.alert("알림", "읽기 성공", Ext.emptyFn);
						} else if(model.getProxy().getReader().rawData.result == "failure") {
							Ext.Msg.alert("알림", "읽을 데이터가 없음 ", Ext.emptyFn);
						} else {
							Ext.Msg.alert("알림", "서버 접속 실패", Ext.emptyFn);
						}
					},
					failure: function() {
						Ext.Msg.alert("알림", "서버 실행 오류", Ext.emptyFn);
					}
				});
			}
		});
		
		var btnUpdate = Ext.create("Ext.Button", {
			text: "수정",
			ui: "confirm",
			handler: function(button, event){
				if(phone == null) {
					Ext.Msg.alert("알림", "읽고나서 실행하세요.", Ext.emptyFn);
				} else {
					phone.set("pname", "갤럭시2");
					phone.data.pimage = "phone12.png";
					phone.phantom = false;
					phone.setDirty();
					
					phone.save({
						success: function(model){
							if(model.getProxy().getReader().rawData.result == "success") {
								Ext.Msg.alert("알림", "수정 성공(정상응답)", Ext.emptyFn);
							} else if(model.getProxy().getReader().rawData.result == "failure") {
								Ext.Msg.alert("알림", "수정할 데이터 없음", Ext.emptyFn);
							} else {
								Ext.Msg.alert("알림", "서버 접속 실패", Ext.emptyFn);
							}
						},
						failure: function() {
							Ext.Msg.alert("알림", "서버 실행 오류", Ext.emptyFn);
						}
					});
				}
			}
		});
		
			var btnDelete = Ext.create("Ext.Button", {
			text: "삭제",
			ui: "confirm",
			handler: function(button, event){
				if(phone == null) {
					Ext.Msg.alert("알림", "읽고나서 실행하세요.", Ext.emptyFn);
				} else {
					phone.erase({
						success: function(model){
							if(model.getProxy().getReader().rawData.result == "success") {
								phone = null;
								rootPanel.remove(panel, false);
								Ext.Msg.alert("알림", "삭제 성공(정상응답)", Ext.emptyFn);
							} else if(model.getProxy().getReader().rawData.result == "failure") {
								Ext.Msg.alert("알림", "삭제할 데이터 없음", Ext.emptyFn);
							} else {
								Ext.Msg.alert("알림", "서버 접속 실패", Ext.emptyFn);
							}
						},
						failure: function() {
							Ext.Msg.alert("알림", "서버 실행 오류", Ext.emptyFn);
						}
					});
				}
			}
		});
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			items: [btnCreate, btnRead, btnUpdate, btnDelete]
		});
		
		var panel = Ext.create("Ext.Panel", {
			tpl: [
				"<table style='width:100%;'>",
					"<tr>",
						"<td style='width:30px; padding:15px;>{pno}</td>",
						"<td>{pname}</td>",
						"<td style='text-align:right;padding:5px'>",
							'<tpl if="pimage!=\'\'">',
								"<img style='width:30px;height:50px;' ",
								"src = '../image/{pimage}' border='0' />",
							'</tpl>',
						"</td>",
					"</tr>",
				"<table>"
			]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar, panel]
		});
		Ext.Viewport.add(rootPanel);
	}
})