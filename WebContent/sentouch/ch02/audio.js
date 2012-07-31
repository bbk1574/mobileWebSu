Ext.application({
	name: "MyApp",
	launch: function(){
		var audio = Ext.create("Ext.Audio", {
			url: "../media/Twilight.wav"
		});
		
		var audioPanel = Ext.create("Ext.Panel", {
			items: [audio]
		});
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked:"top",
			items: [
				{ text:"Play", ui:"confirm", handler: function() { audio.play(); }},
				{ text:"Pause", ui:"confirm", handler: function() { audio.pause(); }},
				{ text:"Toggle", ui:"confirm", handler: function() { audio.toggle(); }}
			]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: { type:"vbox", align:"top", pack:"start" },
			items: [toolbar, audioPanel ]
		});
		Ext.Viewport.add(rootPanel);
	}
});