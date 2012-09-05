Ext.application({
	name: "MyApp",
	launch: function() {
		var template1 = new Ext.XTemplate(
			"<div style='width:100%'>",
			"<font color='blue'><b>[좋아하는 음료수]<b></font><br/>",
			"<tpl for='drinks'>",
			"{#}) {.} </br>",
			"</tpl>",
			"<div>"
		);
		
		var template2 = new Ext.XTemplate(
			"<div style='width:100%'>",
			"<font color='blue'><b>[아이들의 이름]<b></font><br/>",
			"<tpl for='kids'>",
			"{#}) {name} </br>",
			"</tpl>",
			"<div>"
		);
		
		var template3 = new Ext.XTemplate(
			"<div style='width:100%'>",
			"<font color='blue'><b>[아이들 주소]<b></font><br/>",
			"<tpl for='kids'>",
			"{#}) {name} - {parent.address}</br>",
			"</tpl>",
			"<div>"
		);
		
		var panel1 = Ext.create("Ext.Panel", {
			style: "background-color:#ffff00"
		});
		
		var panel2 = Ext.create("Ext.Panel", {
			style: "background-color:#ffff00"
		});
		
		var panel3 = Ext.create("Ext.Panel", {
			style: "background-color:#ffff00"
		});
		
		var data = {
			name:"신용권",
			age: 45,
			address: "서울시 강동구",
			drinks: ['커피', '사이다', '생수'],
			kids: [
				{ name: "민규", age: 11},
				{ name: "민희", age: 6}
			]
		};
		
		template1.append(panel1.element, data);
		template2.append(panel2.element, data);
		template3.append(panel3.element, data);
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [panel1, panel2, panel3]
		});
		Ext.Viewport.add(rootPanel);
	}
})