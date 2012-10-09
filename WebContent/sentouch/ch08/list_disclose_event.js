Ext.application({
	name: "MyApp",
	launch: function() {
		Ext.define("MyApp.Contact", {
			extend: "Ext.data.Model",
			config: {
				fields: [ "firstName", "lastName", "tel", "email"]
			}
		});
		
		var contactStore = Ext.create("Ext.data.Store", {
			model: "MyApp.Contact",
			data: [
				{ firstName: "용권", lastName: "신", tel: "010-123-1234", email: "user1@naver.com" },
				{ firstName: "용권", lastName: "신", tel: "010-123-1234", email: "user1@naver.com" },
				{ firstName: "용권", lastName: "신", tel: "010-123-1234", email: "user1@naver.com" },
				{ firstName: "용권", lastName: "신", tel: "010-123-1234", email: "user1@naver.com" },
				{ firstName: "용권", lastName: "신", tel: "010-123-1234", email: "user1@naver.com" },
				{ firstName: "용권", lastName: "신", tel: "010-123-1234", email: "user1@naver.com" },
				{ firstName: "용권", lastName: "신", tel: "010-123-1234", email: "user1@naver.com" },
				{ firstName: "용권", lastName: "신", tel: "010-123-1234", email: "user1@naver.com" }
			]
		});
		
		var contactList = Ext.create("Ext.dataview.List", {
			store: contactStore,
			itemTpl: "<div>{lastName} {firstName}</div>",
			
			onItemDisclosure: function(model, node, index, e) {
				navBar.setTitle("상세보기");
				btnPrev.show();
				detailView.setData(model.data);
				rootPanel.setActiveItem(detailView);
			},
			listeners: {
				itemdoubletap: function(list, tagret, record, e, eOpts) {
					model = contactStore.getAt(index);
					navBar.setTitle("상세보기");
					btnPrev.show();
					detailView.setData(model.data);
					rootPanel.setActiveItem(detailView);
				}
			}
		});
		
		var detailView = Ext.create("Ext.Panel", {
			tpl: [
				"<div style='width:100%;padding:10px'>",
				"이름: {lastName} {firstName} <hr/>",
				"전화번호: {tel} <hr/>",
				"이메일: {email} <hr/>",
				"</div>"
			]
		});
		
		var btnPrev = Ext.create("Ext.Button", {
			text: "이전",
			ui: "back",
			align: "left",
			hidden: true,
			handler: function(btn, event){
				navBar.setTitle("연락처 목록");
				btnPrev.hide();
				rootPanel.setActiveItem(contactList);
			}
		});
		
		var navBar = Ext.create("Ext.TitleBar", {
			docked: "top",
			ui: "light",
			title: "연락처 목록",
			items: [btnPrev]
		});
					
		var rootPanel = Ext.create("Ext.Panel", {
			layout:"card",
			items: [ navBar, contactList]
		});
		Ext.Viewport.add(rootPanel);
	}
});