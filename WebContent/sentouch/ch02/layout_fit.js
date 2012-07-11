Ext.application({
	name:"MyApp",
	launch: function(){
		var imagePanel = Ext.create("Ext.Panel", {
			html: "<img src='../image/image1.png'/>",
			scrollable: true
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "fit",
			items: [ imagePanel]
		});
		Ext.Viewport.add(rootPanel);
	}
	
})