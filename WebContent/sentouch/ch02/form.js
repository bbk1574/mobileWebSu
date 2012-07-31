Ext.application({
	name: "MyApp",
	launch: function(){
		var toolbar = Ext.create("Ext.Toolbar", {
			docked:"top",
			title: "ȸ������"
		});
		
		var formPanel = Ext.create("Ext.form.Panel", {
			items: [
				{
					xtype:"fieldset",
					items: [
						{ xtype:"textfield", name:"mid", label:"��ȭ" },
						{ xtype:"textfield", name:"mname", label:"�ּ�" }
					]
				},
				{
					xtype:"fieldset",
					title:"�ɼǻ���",
					instructions:"�Է����� �ʾƵ� �˴ϴ�.",
					items: [
						{
							xtype:"textfield", name:"mtel", label:"��ȭ" 
						},
						{
							xtype:"textfield", name:"maddress", label:"�ּ�"
						}
					]
				}
			]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "fit",
			items: [ toolbar, formPanel ]
		});
		Ext.Viewport.add(rootPanel);
	}
});