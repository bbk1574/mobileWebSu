		Ext.application({
				name: "MyApp",
				launch: function() {
					var ajaxProxy = Ext.create("Ext.data.proxy.Ajax", {
						api: {
							create: "16_crud_control.jsp?action=create",
							read: "16_crud_control.jsp?action=list",
							update: "16_crud_control.jsp?action=update",
							destroy: "16_crud_control.jsp?action=destroy"
						}
					});
					
					Ext.define("MyApp.Phone", {
						extend: "Ext.data.Model",
						config: {
							fields: [ "id", "pname", "pimage" ],
							proxy: ajaxProxy
						}
					});

					var phoneStore = Ext.create("Ext.data.Store", {
						model: "MyApp.Phone",
						autoLoad: true
					});

					var btnCreate = Ext.create("Ext.Button", {
						text: "생성",
						ui: "confirm",
						handler: function(button, event) {
							phoneStore.add({
								"pname": "갤럭시New", 
								"pimage": "phone05.png"
							});
							phoneStore.sync();
							phoneStore.load(function(models, operation, success) {
								if(success) {
									phoneList.refresh();
								}
							});
						}
					});

					var btnUpdate = Ext.create("Ext.Button", {
						text: "수정",
						ui: "confirm",
						handler: function(button, event) {
							var selectedModels = phoneList.getSelection();
							if(selectedModels.length != 0) {
								var model = selectedModels[0];
								model.data.pname = "갤럭시S2";
								model.data.pimage = "phone12.png";
								model.phantom = false; 
								model.setDirty();		
								phoneStore.sync();
								phoneList.refresh();
							} else {
								Ext.Msg.alert("알림", "항목을 선택해 주세요.", Ext.emptyFn);
							}
						}
					});

					var btnDelete = Ext.create("Ext.Button", {
						text: "삭제",
						ui: "confirm",
						handler: function(button, event) {
							var selectedModels = phoneList.getSelection();
							if(selectedModels.length != 0) {
								var model = selectedModels[0];
								phoneStore.remove(model);
								phoneStore.sync();
								phoneList.refresh();
							} else {
								Ext.Msg.alert("알림", "항목을 선택해 주세요.", Ext.emptyFn);
							}
						}
					});			

					var toolbar = Ext.create("Ext.Toolbar", {
						docked: "top",
						items: [ btnCreate, btnUpdate, btnDelete ]
					});

					var phoneList = Ext.create("Ext.dataview.List", {
						store: phoneStore,
						itemTpl: [
							"<div style='width:100%;'>",
								"<table  style='width:100%;'>",
									"<tr>",
										"<td style='width:50px; padding-left:5px'>{id}</td>",
										"<td style='padding-left:5px'>{pname}</td>",
										"<td style='text-align:right;padding-left:5px'>",
											"<img style='width:30px;height:50px;' src='../image/{pimage}' border='0'/>",
										"</td>",
									"</tr>",
								"</table>",
							"</div>"
						]
					});

					var rootPanel = Ext.create("Ext.Panel", {
						layout: "fit",
						items: [ toolbar, phoneList ]
					});
					Ext.Viewport.add(rootPanel);
				}
			});