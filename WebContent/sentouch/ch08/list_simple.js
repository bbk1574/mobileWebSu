Ext.application({
	name: "MyApp",
	launch: function() {
		Ext.define("MyApp.Contact", {
			extend: "Ext.data.Model",
			config: {
				fields: [ "firstName", "lastName"]
			}
		});
		
		var contactStore = Ext.create("Ext.data.Store", {
			model: "MyApp.Contact",
			data: [
				{ firstName: "용권", lastName: "신" },
				{ firstName: "용권", lastName: "신" },
				{ firstName: "용권", lastName: "신" },
				{ firstName: "용권", lastName: "신" },
				{ firstName: "용권", lastName: "신" },
				{ firstName: "용권", lastName: "신" },
				{ firstName: "용권", lastName: "신" },
				{ firstName: "용권", lastName: "신" }
			]
		});
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			title: "연락처 목록"
		});
		
		var contactList = Ext.create("Ext.dataview.List", {
			store: contactStore,
			itemTpl: "<div>{lastName} {firstName}</div>"
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout:"fit",
			items: [toolbar, contactList]
		});
		Ext.Viewport.add(rootPanel);
	}
});