Ext.application({
	name: "MyApp",
	launch: function() {
		if(window.localStorage){
			window.localStorage.clear();
			window.localStorage.setItem("phone", '1,2,3,4');
			window.localStorage.setItem("phone-counter", 4);
			window.localStorage.setItem("phone-1", 
				'{ "id": 1, "pno": "p1", "pname": "갤럭시 A", "pimage": "phone01.png" }');
			window.localStorage.setItem("phone-2", 
				'{ "id": 2, "pno": "p2", "pname": "갤럭시 에이스", "pimage": "phone02.png" }');
			window.localStorage.setItem("phone-3", 
				'{ "id": 3, "pno": "p3", "pname": "갤럭시 지오", "pimage": "phone03.png" }');
			window.localStorage.setItem("phone-4", 
				'{ "id": 4, "pno": "p4", "pname": "갤럭시 A", "pimage": "phone04.png" }');
		}
		
		//방법1
		var localstorageProxy = Ext.create("Ext.data.proxy.LocalStorage", {
			id: "phone",
			reader: {
				type: "json"
			}
		});
		
		Ext.define("MyApp.Phone", {
			extend: "Ext.data.Model",
			config: {
				fields: [ "id", "pno", "pname", "pimage"],
				proxy: localstorageProxy
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
				type: "localstorage",
				id: "phone"
				reader: {
					type: "json",
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