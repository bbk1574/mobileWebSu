Ext.application({
	name: "MyApp",
	launch: function(){
		var toolbar = Ext.create("Ext.Toolbar", {
			docked:"top",
			title:"Æû ¾ç½Ä"
		});
		
		var formPanel = Ext.create("Ext.form.Panel", {
				items: [
							{xtype:"fieldset", items: [
								{xtype:"textfield", name:"text", label:"Text", value:"È«±æµ¿"},
								{xtype:"passwordfield", name:"password", label:"Password", value:"12345"},
								{xtype:"hiddenfield", name:"hidden", label:"Hidden"},
								{xtype:"emailfield", name:"email", label:"Email", value:"hongkildong@naver.com"},
								{xtype:"urlfield", name:"url", label:"Url", value:"http://hongkildong.co.kr"},
								{xtype:"numberfield", name:"number", label:"Number", value:10},
								{xtype:"searchfield", name:"search", label:"Search", value:"Sencha Touch"},
								{xtype:"togglefield", name:"toggle", label:"Toggle", value:"1"},
								{xtype:"textareafield", name:"textarea", label:"TextArea", value:"This is Sencha Touch."}
							]},
							
							{xtype:"fieldset", title:"FieldSet1", items:[
								{xtype:"checkboxfield", name:"checkbox", label:"Checkbox", checked:true},
								{xtype:"checkboxfield", name:"checkbox", label:"Checkbox"}
							]},
							
							{xtype:"fieldset", title:"FieldSet2", items:[
								{xtype:"radiofield", name:"radio", label:"Radio", value:"radio1", checked:true},
								{xtype:"radiofield", name:"radio", label:"Radio", value:"radio2"}		
							]},
							
							{xtype:"fieldset", items: [
								{xtype:"datepickerfield", name:"datePicker", label:"DatePicker", value:new Date()}
							]},

							{xtype:"fieldset", items: [
								{xtype:"selectfield", name:"select", label:"Select", options: [
									{text: "option1",  value: "option1"},
									{text: "option2", value: "option2"},
									{text: "option3",  value: "option3"}
								]}
							]},

							{xtype:"fieldset", items: [
								{xtype:"sliderfield", name:"slider", label:"Slider", minValue:0, maxValue:100, value:50},
								{xtype:"spinnerfield", name:"mspinner", label:"Spinner", minValue:0, maxValue:100, increment:10, value:30}
							]}
						]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "fit",
			items: [ toolbar, formPanel ]
		});
		Ext.Viewport.add(rootPanel);
	}
});