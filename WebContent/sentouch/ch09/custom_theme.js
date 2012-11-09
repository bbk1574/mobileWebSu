Ext.Loader.setConfig({enabled: true});
Ext.require("Ext.data.Store");
Ext.require("Ext.dataview.List");
Ext.require("Ext.TitleBar");

	Ext.application({
				name: "MyApp",
				launch: function() {
					Ext.define("MyApp.Contact", {
						extend: "Ext.data.Model",
						config: {
							fields: [ "firstName", "lastName", "tel", "email" ]
						}
					});

					var contactStore = Ext.create("Ext.data.Store", {
						model: "MyApp.Contact",
						data: [
							{ firstName: "용권", lastName: "신", tel: "010-123-1234", email: "user1@naver.com" },
							{ firstName: "태희", lastName: "김", tel: "010-456-1234", email: "user2@naver.com" },
							{ firstName: "동일", lastName: "박", tel: "010-789-1234", email: "user3@naver.com" },
							{ firstName: "수길", lastName: "김", tel: "016-558-2345", email: "user4@naver.com" },
							{ firstName: "동원", lastName: "이", tel: "011-129-3456", email: "user5@naver.com" },
							{ firstName: "민규", lastName: "신", tel: "018-783-4567", email: "user6@naver.com" },
							{ firstName: "춘몽", lastName: "이", tel: "019-357-5678", email: "user7@naver.com" },
							{ firstName: "희원", lastName: "박", tel: "010-239-6789", email: "user8@naver.com" }
						]
					});		

					var contactList = Ext.create("Ext.dataview.List", {
						store: contactStore,
						itemTpl: "<div>{lastName} {firstName}</div>",
						onItemDisclosure: function(model, node, index, e) {
							navBar.setTitle("상세 보기");
							btnPrev.show();
							detailView.setData(model.data);
							rootPanel.setActiveItem(detailView);
						}
					});

					var detailView =Ext.create("Ext.Panel", {
						tpl: [
							"<div style='width:100%;padding:10px;'>",
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
						handler: function(btn, event) {
							navBar.setTitle("연락처 목록");
							btnPrev.hide();
							rootPanel.setActiveItem(contactList);
						}
					});

					var navBar = Ext.create("Ext.TitleBar", {
						docked: "top",
						ui: "light",
						title: "연락처 목록",
						items: [ btnPrev ]
					});

					var rootPanel = Ext.create("Ext.Panel", {
						layout: "card",
						items: [ navBar, contactList ]
					});
					Ext.Viewport.add(rootPanel);
				}
			});