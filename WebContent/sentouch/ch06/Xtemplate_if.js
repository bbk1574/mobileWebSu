Ext.application({
	name: "MyApp",
	launch: function() {
		var template = new Ext.XTemplate(
			"<div style='width:100%'>",
			"<font color='blue'><b>[좋아하는 음료수]<b></font><br/>",
			"<tpl for='kids'>",
			"{#}) {name}",
			"(",
			"<tpl if='(age &gt;= 10)' && (age &gt; 18)'>Teenager</tpl>",
			"<tpl if='this.isChild(age)'>Child</tpl>",
			")",
			"<br/>",
			"</tpl>",
			"<div>",
			{
				isChild: function(age){
					return age < 10;
				}
			}
		);
		
		var panel = Ext.create("Ext.Panel", {
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
		
		template.append(panel.element, data);
				
		var rootPanel = Ext.create("Ext.Panel", {
			items: [panel]
		});
		Ext.Viewport.add(rootPanel);
	}
})