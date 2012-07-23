Ext.application({
	name: "MyApp",
	launch: function(){
		var segmentedButton1 = Ext.create("Ext.SegmentedButton", {
			allowMultiple: false,
			items: [
				{ text:"Button 1", ui:"decline", pressed:true},
				{ text:"Button 2", ui:"decline"},
				{ text:"Button 3", ui:"decline"}
			],
			listeners: {
				toggle: function(segmentedButton, button, pressed){
					Ext.Msg.alert("알림", button.getText() + (pressed?"on":"off"), Ext.emptyFn);
				}
			}
		});
		
		var segmentedButton2 = {
			xtype:"segmentedbutton",
			allowMultiple:true,
			items: [
				{ text:"Button 4", ui:"confirm", iconCls:"locate", iconMask:true},
				{ text:"Button 5", ui:"confirm", iconCls:"settings", iconMask:true}
			],
			listeners: {
				toggle: function(segmentedButton, button, pressed){
					Ext.Msg.alert("알림", button.getText() + (pressed?"on":"off"), Ext.emptyFn);
				}
			}
		};
		
		var toolbar = {
			xtype:"toolbar",
			docked:"top",
			items: [ segmentedButton1 ]
		};
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: { type:"vbox", align:"middle", pack:"center" },
			items: [toolbar, segmentedButton2]
		});
		Ext.Viewport.add(rootPanel);
	}
});