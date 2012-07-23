Ext.application({
	name: "MyApp",
	launch: function(){
		var overlay1 = Ext.create("Ext.Panel", {
			modal:true,
			centered:true,
			hidden:true,
			width:260, height:240,
			items: {
				xtype:"titlebar",
				docked:"top",
				title:"Overlay",
				items: [
					{
						text:"X",
						align:"right",
						ui:"decline",
						handler: function(btn, event){
							overlay1.hide();
						}
					}
				]
			},
			html:"<img src='../image/image2.png' />",
			scrollable:true
		});
		Ext.Viewport.add(overlay1);
		
		var overlay2 = Ext.create("Ext.Panel", {
			modal:true,
			centered:true,
			hidden:true,
			hideOnMaskTap: true,
			width:260, height:130,
			items: {
				xtype:"titlebar",
				docked:"top",
				title:"Overlay"
			},
			html:"Shows this Component next to another Componen",
			scrollable:true
		});
		Ext.Viewport.add(overlay2);
		
		var toolbar = {
			xtype:"toolbar",
			docked:"top",
			items: [
				{
					text:"showCentered",
					ui:"confirm",
					handler: function(btn, event){
						overlay1.setCentered(true);
						overlay1.show();
					}
				},
				{
					text:"showBy",
					ui:"confirm",
					handler: function(btn, event){
						overlay2.showBy(btn);
					}
				}
			]
		};
		
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar]
		});
		Ext.Viewport.add(rootPanel);
	}
});