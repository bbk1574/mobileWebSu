Ext.application({
	name: "MyApp",
	launch: function(){
		var loginForm = Ext.create("Ext.form.Panel", {
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			items: [
				{
					xtype: 'fieldset',
					items: [
						{
							xtype: "textfield", name: "mid", value:"user", label:"���̵�"
						},
						{
							xtype:"passwordfield", name:"mpassword", value: "12345", label:"�н�����"
						}
					]
				},
				{
					xtype:"spacer"
				},
				{
					xtype:"panel",
					layout: {
						type:"hbox", align:"middle", pack:"center"
					},
					items: [
						{
							xtype:"button", text:"�α���", ui:"decline", width:"100"
						},
						{
							xtype:"spacer", width:20
						},
						{
							xtype:"button", text:"���", ui:"decline", width:100,
							handler: function() { sheet.hide(); }
						}
					]
				}
			]
		});
		
		var sheet = Ext.create("Ext.Sheet", {
			left: 0,
			right: 0,
			bottom: 0,
			height: 200,
			layout: "fit",
			items: [ loginForm ],
			hidden: true
		});
		Ext.Viewport.add(sheet);
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			items: [
				{
					text: '�α���',
					ui: "confirm",
					handler: function(){
						sheet.show();
					}
				}
			]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar]
		});
		Ext.Viewport.add(rootPanel);
	}
});