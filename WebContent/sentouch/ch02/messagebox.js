Ext.application({
	name: "MyApp",
	launch: function(){
		var btnAlert = Ext.create("Ext.Button", {
			text:"Alert",
			ui:"confirm",
			handler: function() {
				Ext.Msg.alert("알림", "로그인되었습니다.", Ext.emptyFn); 
			}
		});
		
		var btnConfirm = Ext.create("Ext.Button", {
			text:"Confirm",
			ui:"confirm",
			handler: function() {
				Ext.Msg.confirm("확인", "정말 전송하시겠습니까?", function(buttonId){
					if (buttonId =="yes"){
						console.log("예를 눌렸군요");
					} else {
						console.log("아니오를 눌렸군요");
					}
				});
			}
		});
		
		var btnPrompt = Ext.create("Ext.Button", {
			text:"Prompt",
			ui:"confirm",
			handler: function(){
				Ext.Msg.prompt("입력", "이름을 입력하세", function(buttonId, value){
					if (buttonId=="ok"){
						console.log("입력한 내용" + value);
					}
				});
			}
		});
		
		var toolbar = {
			xtype:"toolbar",
			docked:"top",
			items: [btnAlert, btnConfirm, btnPrompt]
		}
	
		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar]
		});
		Ext.Viewport.add(rootPanel);
	}
});