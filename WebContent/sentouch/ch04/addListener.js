Ext.application({
	name: "MyApp",
	launch: function(){
		var button1 = Ext.create("Ext.Button", {
			text:"Button1",
			ui:"confirm"
		});
		button1.addListener(
			"tap",
			function(event){
				Ext.Msg.alert("알림", "버튼1 탭 이벤트 처리", Ext.emptyFn);
			}
		);
		
		var button2 = Ext.create("Ext.Button", {
			text:"Button2",
			ui:"confirm"
		});
		button2.addListener(
			"tap",
			function(event){
				Ext.Msg.alert("알림", "버튼2 탭 이벤트 처리", Ext.emptyFn);
			},
			this,
			{
				delay: 3000
			}
		);
		
		var button3 = Ext.create("Ext.Button", {
			text:"Button3",
			ui:"confirm"
		});
		button3.addListener(
			"tap",
			function(event){
				Ext.Msg.alert("알림", "버튼3 탭 이벤트 처리", Ext.emptyFn);
			},
			this,
			{
				single: true
			}
		);
		
		var button4 = Ext.create("Ext.Button", {
			text:"Button4",
			ui:"confirm"
		});
		button4.addListener(
			"tap",
			function(event){
				console.log("button4-tap");
			},
			this,
			{
				buffer: 3000	
			}
		);
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			items: [button1, button2, button3, button4]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar]
		});
		Ext.Viewport.add(rootPanel);
	}
});