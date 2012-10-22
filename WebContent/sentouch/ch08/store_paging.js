Ext.application({
	name:"MyApp",
	launch: function() {
		var ajaxProxy = Ext.create("Ext.data.proxy.Ajax", {
			url: "json_data_paging.jsp",
			reader: {
				type: "json",
				rootProperty:"data"
			}
		});
		
		Ext.define("MyApp.Phone", {
			extend: "Ext.data.Model",
			config: {
				fields: ["pno", "pname", "pimage"],
				proxy: ajaxProxy
			}
		});
		
		var phoneStore = Ext.create("Ext.data.Store", {
			model: "MyApp.Phone",
			pageSize: 4,
			autoLoad: true
		});
		
		var phoneList = new Ext.dataview.List({
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
		
		var btnPrev = new Ext.Button({
			text: "이전",
			ui: "back",
			align:"left",
			hidden: true,
			handler: function(button, event){
				phoneStore.loadPage(phoneStore.currentPage-1, {
					callback: function(records, operation, success){
						if(success){
							phoneList.refresh();
							buttonShowAndHide();
						}
					}
				});
			}
		});
		
		var btnNext = new Ext.Button({
			text: "다음",
			ui: "forward",
			align:"right",
			hidden: true,
			handler: function(button, event){
				phoneStore.loadPage(phoneStore.currentPage+1, {
					callback: function(records, operation, success){
						if(success){
							phoneList.refresh();
							buttonShowAndHide();
						}
					}
				});
			}
		});
		
		function buttonShowAndHide() {
			var totalPage = phoneStore.getProxy().getReader().rawData.totalPage;
			var currentPage = phoneStore.currentPage;
			if(currentPage==1){
				btnPrev.hide();
				btnNext.show()
			} else if (1<currentPage && currentPage < totalPage){
				btnPrev.show();
				btnNext.show();
			} else if (currentPage == totalPage){
				btnPrev.show();
				btnNext.hide();
			}
		}
		
		var navBar = Ext.create("Ext.TitleBar", {
			docked: "top",
			ui: "light",
			title: "폼 목록",
			items: [btnPrev, btnNext]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "fit",
			items: [navBar, phoneList]
		});
		Ext.Viewport.add(rootPanel);
	}
})