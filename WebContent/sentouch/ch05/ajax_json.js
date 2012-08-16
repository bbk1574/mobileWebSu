Ext.application({
	name: "MyApp",
	launch: function(){
			var eventHandler = function(button, event){
			Ext.Viewport.setMasked({xtype:"loadmask", message: "로딩중..."});
			Ext.Ajax.request({
				url: "json_data.jsp",
				success: function(response, options){
					Ext.Viewport.setMasked(false);
					if (response.status == 200){
						var phoneArray = Ext.JSON.decode(response.responseText, true);
						if(phoneArray != null) {
							displayPhoneList(phoneArray);
						}
						console.log(phoneArray);
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
				text:"Ajax-JSON 처리",
				ui: "confirm",
				handler: eventHandler
			}
		});
		
		function displayPhoneList(phoneArray) {
			listPanel.removeAll(true);
			
			for (var i=0; i<phoneArray.length; i++) {
				var phone = phoneArray[i];
				var pno = phone.pno;
				var pname = phone.pname;
				var pimage = phone.pimage;
				
				var item = {
					html: "<table style='width:100%;border:1px;border-bottom-style:solid;'>" +
							"<tr>" +
							"<td style='width:50px; padding:5px'>" + pno + "</td>" +
							"<td style='padding-left:5px'>" + pname + "</td>" +
							"<td style='text-align:right;padding:5px'>" +
							"<img style='width:30px;height:50px;' src='../image/" + pimage + "' border='0' /></td>" +
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