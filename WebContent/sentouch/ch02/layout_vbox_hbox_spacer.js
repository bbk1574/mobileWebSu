Ext.application({
	name: "MyApp",
	launch: function(){
		var btn1= Ext.create("Button", {text: "버튼1"});
		var btn2= Ext.create("Button", {text: "버튼2"});
		var btn3= Ext.create("Button", {text: "버튼3"});
		
		var panel1 = Ext.create("Ext.Panel", {
			layout: {type:"hbox", align:"middle", pack:"justify"},
			items: [btn1, btn2, btn3],
			style: "background-color:#00ff00"			
		});
		
		var btn4= Ext.create("Button", {text: "버튼1"});
		var btn5= Ext.create("Button", {text: "버튼2"});
		var btn6= Ext.create("Button", {text: "버튼3"});
		
		var panel2 = Ext.create("Ext.Panel", {
			layout: {type:"hbox", align:"middle", pack:"justify"},
			items: [
				Ext.create("Ext.Spacer"),
				btn4,
				Ext.create("Ext.Spacer"),
				btn5,
				Ext.create("Ext.Spacer"),
				btn6
			],
			style: "background-color:#0000ff"			
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: {type:"vbox", align: "stretch", pack: "start"},
			items:  [panel1, panel2]
		});
		Ext.Viewport.add(rootPanel);		
	}
});