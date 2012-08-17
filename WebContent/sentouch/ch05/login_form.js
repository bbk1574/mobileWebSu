Ext.application({
	name: "MyApp",
	launch: function() {
		var formPanel = Ext.create("Ext.form.Panel", {
			items: [
				{ 
					xtype: "fieldset", 
					items: [
						{
							xtype: "textfield", name:"mid", label:"아이디"
						},
						{
							xtype:"passwordfield", name:"mpassword", label:"패스워드"
						}
					]				
				}
			]
		});
		
		var loginHandler = function(button, event){
			Ext.Viewport.setMasked({
				xtype:"loadmask",
				message:"로딩중..."
			});
			
			formPanel.submit({
				url:"login.jsp",
				success: function(form, result){
					console.log(result.status);
					Ext.Viewport.setMasked(false);
					if(result.loginResult == "success"){
						Ext.Msg.alert("알림", "로그인 성공", Ext.emptyFn);
					} else if(result.loginResult == fall){
						Ext.Msg.alert("알림", "로그인 실패: " + result.message, Ext.emptyFn);
					}
				},
				failure: function(form, result){
					Ext.Viewport.setMasked(false);
					Ext.Msg.alert("알림", "서버 실행 오류: " + result.message, Ext.emptyFn);
				}
			});
		};
		
		var navBar = Ext.create("Ext.TitleBar", {
			docked: "top",
			title: "로그인 폼",
			items: [
				{
					text: "로그인",
					ui: "confirm",
					align: "right",
					handler: loginHandler
				}
			]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "fit",
			items: [navBar, formPanel]
		});
		Ext.Viewport.add(rootPanel);
	}
})