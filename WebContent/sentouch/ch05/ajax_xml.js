Ext.application({
	name: "MyApp",
	launch: function() {
		var eventHandler = function(button, event){
			Ext.Viewport.setMasked({xtype:"loadmask", message: "로딩중..."});
			Ext.Ajax.request({
				url: "xml_data.jsp",
				success: function(response, options){
					Ext.Viewport.setMasked(false);
					if (response.status == 200){
						var xmlDoc = response.responseXML;
						displayPhoneList(xmlDoc);
						console.log(xmlDoc);
					} else if(response.status == 0) {
						Ext.Msg.alert("알림", "서버 접속 실패", Ext.emptyFn);
					}
				},
				failure: function(response, options){
					Ext.Viewport.setMasked(false);
					Ext.Msg.alert("알림", "서버  실행 오류", Ext.emptyFn);
				}
			});
		};
		
		var listPanel = Ext.create("Ext.Panel");
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked: "top",
			items: {
				text:"Ajax?Xml 처리",
				ui: "confirm",
				handler: eventHandler
			}
		});
		
		function displayPhoneList(xmlDoc) {
			listPanel.removeAll(true);
			
			var query = Ext.create("Ext.dom.Query");
			
			var phoneArray = query.select("phone", xmlDoc);
			for (var i=0; i<phoneArray.length; i++) {
				var phone = phoneArray[i];
				var pno = phone.getAttribute("pno");
				var pname = query.selectNode("pname", phone).childNodes[0].nodeValue;
				var pimage = query.selectNode("pimage", phone).childNodes[0].nodeValue;
				
				var item = {
					html: "<table style='width:100%;border:1px;border-bottom-style:solid;'>" +
							"<tr>" +
							"<td style='width:50px; padding:5px'>" + pno + "</td>" +
							"<td style='padding-left:5px'>" + pname + "</td>" +
							"<td style='text-align:right;padding:5px'>" +
							"<img style='width:30px;height:50px;' src='../image/" + pimage + "' /></td>" +
							"</tr></table>"
				};
				listPanel.add(item);
			}
		};
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar, listPanel]
		});
		Ext.Viewport.add(rootPanel);
	}
})