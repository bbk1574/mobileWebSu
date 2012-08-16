Ext.application({
	name: "MyApp",
	launch: function(){
		var dragPanel = {
			xtype:"panel",
			style:"background?color:#00ff00",
			html:"<div style='background?color:#00ff00'>드래그<br/>하세요</div>",
			draggable:true,
			left:0, right:0, top:0, bottom:0,
			width:70, height:55,
			listeners: {
				dragstart:{
					fn: function(event){
						writeLog("dragstart: " + event.startX + ", " + event.startY);
					},
					element: "element"
				},
					drag:{
					fn: function(event){
						writeLog("drag: " + event.previousX + ", " + event.previousX);
					},
					element: "element"
				},
					dragend:{
					fn: function(event){
						writeLog("dragend: " + event.pageX + ", " + event.pageY);
					},
					element: "element"
				}
			}
		};
		
		var writeLog = function(log){
			logPanel.setHtml(logPanel.getHtml() + log + "<br/>");
		};
		
		var eventPanel = {
			xtype:"panel",
			items: [
				{
					xtype:"toolbar", docked:"top", title:"이벤트 발생 패널"
				},
				dragPanel
			]
		};
		
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
		});

		var rootPanel = Ext.create("Ext.Panel", {
			layout: {type:"vbox", align: "stretch"},
			defaults: { flex: 1 },
			items: [eventPanel, logPanel]
		});
		Ext.Viewport.add(rootPanel);
	}
});