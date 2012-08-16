Ext.application({
	name: "MyApp",
	launch: function(){
		var toolbar = Ext.create("Ext.Toolbar", {
			docked:"top",
			items: [
				{
					xtype:"button", 
					text:"get",
					ui:"confirm",
					handler: function(){
						var div = Ext.get("tagID"); //태그 id로 태그 객체를 찾되 Ext.dom.Element 객체로 래핑해서 리턴
						console.log(div);
						var content = div.getHtml();
						Ext.Msg.alert("알림", content);
					}
				},
				{
					xtype:"button",
					text:"getDom",
					ui:"confirm",
					handler: function(){
						var div = Ext.getDom("tagID"); //태그 id로 태그 객체를 찾아 리턴
						console.log(div);
						var content = div.innerHTML;
						Ext.Msg.alert("알림", content);
					}
				},
				{
					xtype:"button",
					text:"getCmp",
					ui:"confirm",
					handler: function(){
						var Panel = Ext.getCmp("cmpId"); //컴포넌트 id로 컴포넌트를 찾아 리턴
						console.log(Panel);
						var content = Panel.getHtml();
						Ext.Msg.alert("알림", content);
					}
				}
			]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [
				toolbar,
				{
					xtype:"panel",
					html: "<div id='tagID'>태그내용</div>"
				},
				{
					id:"cmpId",
					xtype:"panel",
					html: "컴포넌트 내용"
				}
			]
		});
		Ext.Viewport.add(rootPanel);
	}
});