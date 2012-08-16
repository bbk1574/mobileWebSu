Ext.application({
	name: "MyApp",
	launch: function(){
		var writeLog = function(log){
			logPanel.setHtml(logPanel.getHtml() + log + "<br/>");
		};
		
		var eventPanel = Ext.create("Ext.Panel", {
			items: [{xtype:"toolbar", docked:"top", title:"이벤트 발생 패널"}],
			listeners: {
				tapstart: {
					fn:function(event){
						writeLog("tapstart");
					},
					element: "element"
				},
				tap: {
					fn: function(event){
						writeLog("tap");
					},
					element: "element"
				},
				singletap: {
					fn: function(event){
						writeLog("singletap");
					},
					element: "element"
				},
				doubletap: {
					fn: function(event){
						writeLog("doubletap");
					},
					element: "element"
				},
				taphold: {
					fn: function(event){
						writeLog("taphold");
					},
					element: "element"
				}
			}
		});
		
		var logPanel = Ext.create("Ext.Panel", {
			id:"logPanel",
			items: {
				xtype:"titlebar",
				docked:"top",
				title:"로그 출력 패널",
				items: [{
					xtype:"button", text:"지우기", ui:"confirm", align:"right", handler: function(){
						logPanel.setHtml("");
					}
				}]
			},
			style:"background-color:orange",
			html:"",
			scrollable: "vertical"
		})
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: {type:"vbox", align: "stretch"},
			defaults: { flex: 1 },
			items: [eventPanel, logPanel]
		});
		Ext.Viewport.add(rootPanel);
	}
});