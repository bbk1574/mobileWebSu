Ext.application({
	name: "MyApp",
	launch: function(){
		var video = Ext.create("Ext.Video", {
			width: 300,
			height: 200,
			url: "../media/BigBuck.m4v"
		});
		
		var videoPanel = Ext.create("Ext.Panel", {
			items: [video]
		});
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked:"top",
			items: [
				{ text:"Play", ui:"confirm", handler: function() { video.play(); }},
				{ text:"Pause", ui:"confirm", handler: function() { video.pause(); }},
				{ text:"Toggle", ui:"confirm", handler: function() { video.toggle(); }}
			]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: { type:"vbox", align:"top", pack:"start" },
			items: [toolbar, videoPanel ]
		});
		Ext.Viewport.add(rootPanel);
	}
});