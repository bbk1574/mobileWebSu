Ext.application({
	name:"MyApp",
	launch: function() {
		var eventHandler = function(button, event) {
			var xValue = Ext.getCmp("x").getValue();
			var yValue = Ext.getCmp("y").getValue();
			Ext.Ajax.request({
				url: "calculator.jsp",
				params: { x:xValue, y:yValue },
				success: function(response, options) {
					if(response.status == 200){
						Ext.Msg.alert("알림", "계산결과:" + response.responseText, Ext.emptyFn);
					} else if (response.status == 0){
						Ext.Msg.alert("알림", "오류 0", Ext.emptyFn);		
					}
				},
				failure : function(response, options){
					Ext.Msg.alert("알림", "오류: " + response.status, Ext.emptyFn);
				}
			});
		};
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked:"top",
			items: {
				text: "계산하기",
				ui:"confirm",
				handler: eventHandler
			}
		});
		
		var formPanel = Ext.create("Ext.form.Panel", {
			items: [
				{ xtype:"fieldset", items: [
					{ id:"x", xtype:"textfield", name:"x", value:10 },
					{ id:"y", xtype:"textfield", name:"y", value:2 }
				]}
			]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "fit",
			items: [toolbar, formPanel]
		});
		Ext.Viewport.add(rootPanel);
	}
})