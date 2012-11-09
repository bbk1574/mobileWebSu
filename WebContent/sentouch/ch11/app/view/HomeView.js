Ext.define("MyApp.view.HomeView", {
	extend: "Ext.Panel",
	xtype: "homeview",	
	id: "homeview",	
	config: {
		title: "Home",
		iconCls: "home",
		scrollable: true,
		styleHtmlContent: true,
		html: [
			'<center>',
				'<img src="resources/images/sencha.png" />',
				'<h3>Welcome to Sencha Touch</h3>',
				'<h4>Sencha Touch (2.0.0)</h4>',
			'</center>'
		].join("")
	}
});