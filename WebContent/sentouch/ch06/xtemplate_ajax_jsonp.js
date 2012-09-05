Ext.application({
	name: "MyApp",
	launch: function() {
		var btnAjax = Ext.create("Ext.Button", {
			text:"AJAX",
			ui: "confirm",
			handler: function(button, event){
				Ext.Viewport.setMasked({xtype:"loadmask", message:"로딩중...."});
				Ext.Ajax.request({
					url:"ajax_data.jsp",
					params:{mid: "user1"},
					success: function(response, options){
						Ext.Viewport.setMasked(false);
						if(response.status == 200){
							var data = Ext.JSON.decode(response.responseText, true);
							console.log(data);
							panel.setData(data);
						} else if (response.status == 0){
							Ext.Msg.alert("알림", "서버 접속 실패", Ext.emptyFn);
						}
					},
					failure: function(response, options){
						Ext.Viewport.setMask(false);
						Ext.Msg.alert("알림", "서버 실행 오류" + response.status, Ext.emptyFn);
					}
				});
			}
		});
		
		var btnJsonp = Ext.create("Ext.Button", {
			text:"JSONP",
			ui: "decline",
			handler: function(button, event){
				Ext.Viewport.setMasked({xtype:"loadmask", message:"로딩중...."});
				Ext.data.JsonP.request({
					url:"http://172.16.1.141:8080/mobileWebSu/sentouch/ch06/jsonp_data.jsp",
					params:{mid: "user2"},
					callbackKey: "serverKey",
					success: function(result){
						Ext.Viewport.setMasked(false);
						console.log(result);
						panel.setData(result);
					},
					failure: function(result){
						Ext.Viewport.setMasked(false);
						Ext.Msg.alert("알림", "서버 접속 또는 서버 실행 오류");
					}
				});
			}
		});
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			items: [btnAjax, btnJsonp]
		});
		
		var template = new Ext.XTemplate(
			"<div style='width:100%'>",
			"<font color='blue'><b>[기본 정보]</b></font>",
			"<hr/>",
			"이름: {name}<br/>",
			"나이: {age}<br/><br/>",
			"<font color='blue'><b>[좋아하는 음료수]</b></font>",
			"<hr/>",
			"<tpl for='drinks'>",
			"{#}) {.} <br/>",
			"</tpl><br/>",			
			"<font color='blue'><b>[아이들 이름]</b></font><br/>",
			"<hr/>",
			"<tpl for='kids'>",
			"{#}) {name} <br/>",
			"</tpl>",
			"</div>"
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