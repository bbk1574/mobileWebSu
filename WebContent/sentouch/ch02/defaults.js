Ext.application({
	name:"MyApp",
	launch: function(){
		var btn1 = Ext.create("Ext.Button", {text:"버튼1"});
		var btn2 = new Ext.Button({text:"버튼2"});
		var btn3 = { xtype:"button", text:"버튼3"};
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout:{ type:"hbox", align:"top"},
			defaults: {
				flex: 1,
				handler: function(button, event){
					Ext.Msg.alert("알림", button.getText() + "을 클릭", Ext.emptyFn);
				}
			},
			items: [btn1, btn2, btn3]
		});
		Ext.Viewport.add(rootPanel);
	}
});