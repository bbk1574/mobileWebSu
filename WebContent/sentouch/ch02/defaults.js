Ext.application({
	name:"MyApp",
	launch: function(){
		var btn1 = Ext.create("Ext.Button", {text:"��ư1"});
		var btn2 = new Ext.Button({text:"��ư2"});
		var btn3 = { xtype:"button", text:"��ư3"};
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout:{ type:"hbox", align:"top"},
			defaults: {
				flex: 1,
				handler: function(button, event){
					Ext.Msg.alert("�˸�", button.getText() + "�� Ŭ��", Ext.emptyFn);
				}
			},
			items: [btn1, btn2, btn3]
		});
		Ext.Viewport.add(rootPanel);
	}
});