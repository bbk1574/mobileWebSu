Ext.application({
	name: "MyApp",
	launch: function(){
		if(window.localStorage){
			window.localStorage.clear();
		}
		
		var localstorageProxy = Ext.create("Ext.data.proxy.LocalStorage", {
			id: "phone"
		});
		
		Ext.define("MyApp.Phone", {
			extend: "Ext.data.Model",
			config: {
				fields: [ "id", "pno", "pname", "pimage"],
				proxy: localstorageProxy
			}
		});
		
		var phone = null;
		
		var btnCreate = Ext.create("Ext.Button", {
			text: "생성",
			ui: "confirm",
			handler: function(button, event){
				phone = Ext.create("MyApp.Phone", {
					pno:"p5",
					pname:"갤럭시New",
					pimage:"phone05.png"
				});
				phone.save({
					success: function(model){
						Ext.Msg.alert("알림", "생성 성공", Ext.emptyFn);
					}
				});
			}
		});
		
		var btnRead = Ext.create("Ext.Button", {
			text:"읽기",
			ui: "confirm",
			handler: function(button, event){
				if (phone == null){
					Ext.Msg.alert("알림", "생성 후 읽으세요", Ext.emptyFn);
				} else {
					MyApp.Phone.load(phone.data.id, {
						success: function(model){
							phone = model;
							rootPanel.add(panel);
							panel.setData(phone.data);
							Ext.Msg.alert("알림", "읽기 성공", Ext.emptyFn);
						}
					});
				}
			}
		});
		
		var btnUpdate = Ext.create("Ext.Button", {
			text: "수정",
			ui: "confirm",
			handler: function(button, event){
				if(phone == null){
					Ext.Msg.alert("알림", "생성후 수정하세요", Ext.emptyFn);
				} else {
					phone.set("pname", "갤럭시S2");
					phone.data.pimage = "phone12.png";
					phone.phantom=false;
					phone.setDirty();
					phone.save({
						success: function(model){
							panel.setData(null);
							panel.setData(phone.data);
							Ext.Msg.alert("알림", "수정 성공", Ext.emptyFn);
						}
					});
				}
			}
		});
		
		var btnDelete = Ext.create("Ext.Button", {
			text: "삭제",
			ui: "confirm",
			handler: function(button, event){
				if(phone == null){
					Ext.Msg.alert("알림", "생성 후 삭제하세요", Ext.emptyFn);
				} else {
					phone.erase({
						success: function(){
							panel = null;
							rootPanel.remove(panel, false);
							Ext.Msg.alert("알림", "삭제 성공", Ext.emptyFn);
						}
					});
				}
			}
		});
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			items: [btnCreate, btnRead, btnUpdate, btnDelete]
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
			items: [toolbar, panel]
		});
		Ext.Viewport.add(rootPanel);
	}
})