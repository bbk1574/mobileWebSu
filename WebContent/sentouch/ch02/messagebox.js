Ext.application({
	name: "MyApp",
	launch: function(){
		var btnAlert = Ext.create("Ext.Button", {
			text:"Alert",
			ui:"confirm",
			handler: function() {
				Ext.Msg.alert("�˸�", "�α��εǾ����ϴ�.", Ext.emptyFn); 
			}
		});
		
		var btnConfirm = Ext.create("Ext.Button", {
			text:"Confirm",
			ui:"confirm",
			handler: function() {
				Ext.Msg.confirm("Ȯ��", "���� �����Ͻðڽ��ϱ�?", function(buttonId){
					if (buttonId =="yes"){
						console.log("���� ���ȱ���");
					} else {
						console.log("�ƴϿ��� ���ȱ���");
					}
				});
			}
		});
		
		var btnPrompt = Ext.create("Ext.Button", {
			text:"Prompt",
			ui:"confirm",
			handler: function(){
				Ext.Msg.prompt("�Է�", "�̸��� �Է��ϼ�", function(buttonId, value){
					if (buttonId=="ok"){
						console.log("�Է��� ����" + value);
					}
				});
			}
		});
		
		var toolbar = {
			xtype:"toolbar",
			docked:"top",
			items: [btnAlert, btnConfirm, btnPrompt]
		}
	
		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar]
		});
		Ext.Viewport.add(rootPanel);
	}
});