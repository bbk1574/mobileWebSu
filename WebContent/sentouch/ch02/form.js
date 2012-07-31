Ext.application({
	name: "MyApp",
	launch: function(){
		var toolbar = Ext.create("Ext.Toolbar", {
			docked:"top",
			title: "회원가입"
		});
		
		var formPanel = Ext.create("Ext.form.Panel", {
			items: [
				{
					xtype:"fieldset",
					items: [
						{ xtype:"textfield", name:"mid", label:"전화" },
						{ xtype:"textfield", name:"mname", label:"주소" }
					]
				},
				{
					xtype:"fieldset",
					title:"옵션사항",
					instructions:"입력하지 않아도 됩니다.",
					items: [
						{
							xtype:"textfield", name:"mtel", label:"전화" 
						},
						{
							xtype:"textfield", name:"maddress", label:"주소"
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