Ext.application({
	name: "MyApp",
	launch: function() {
		//방법1
		var jsonpProxy = Ext.create("Ext.data.proxy.JsonP", {
			url: "http://172.16.1.135:8080/mobileWebSu/sentouch/ch08/jsonp_data.jsp",
			callbackKey: "serverKey",
			reader: {
				type: "json",
				rootProperty: "data"
			}
		});
		
		Ext.define("MyApp.Phone", {
			extend: "Ext.data.Model",
			config: {
				fields: [ "pno", "pname", "pimage"],
				proxy: jsonpProxy 
			}
		});
		
		//autoLoad 
		var phoneStore = Ext.create("Ext.data.Store", {
			model: "MyApp.Phone",
			autoLoad: true
		});
		
		/*
		var phoneStore = Ext.create("Ext.data.Store", {
			model: "MyApp.Phone"
		});
		phoneStore.load(function(models, operation, success){
			if(success){
				Ext.Msg.alert("알림", "Store에  Model 객체를 저장함", Ext.emptyFn);
			}
		});	
		*/
		
		//방법2
		/*
		Ext.define("MyApp.Phone", {
			extend: "Ext.data.Model",
			config: {
				fields: [ "pno", "pname", "pimage"]
			}
		});
		
		var phoneStore = Ext.create("Ext.data.Store", {
			model: "MyApp.Phone",
			proxy: {
				type: "jsonp",
				url: "http://172.16.1.135:8080/mobileWebSu/sentouch/ch08/jsonp_data.jsp",
				callbackKey: "serverKey",
				reader: {
					type: "json",
					rootProperty: "data"			
				}
			},
			autoLoad: true
		});
		*/
		
		var phoneList = Ext.create("Ext.dataview.List", {
			store: phoneStore,
			itemTpl: [
				"<div style='width:100%;'>",
					"<table  style='width:100%;'>",
						"<tr>",
							"<td style='width:50px; padding-left:5px'>{pno}</td>",
							"<td style='padding-left:5px'>{pname}</td>",
							"<td style='text-align:right;padding-left:5px'>",
								"<img style='width:30px;height:50px;' src='../image/{pimage}' border='0'/>",
							"</td>",
						"</tr>",
					"</table>",
				"</div>"
			]
			
		});
		
		var navBar = Ext.create("Ext.TitleBar", {
			docked: "top",
			title: "폰 목록"
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout:"card",
			items: [ navBar, phoneList]
		});
		Ext.Viewport.add(rootPanel);
	}
});