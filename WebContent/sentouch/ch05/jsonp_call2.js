Ext.application({
	name: "MyApp",
	launch: function() {
		var btnPrev = Ext.create("Ext.Button", {
			text:"이전",
			ui:"confirm",
			align:"left",
			hidden:true,
			handler: function(button, event){
				getPhoneList(1);
			}
		});
		
		var btnNext = Ext.create("Ext.Button", {
			text:"다음",
			ui:"confirm",
			align:"right",
			hidden:true,
			handler: function(button, event){
				getPhoneList(2);
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
		
		var getPhoneList = function(pageNo){
			Ext.Viewport.setMasked({ xtype:"loadmask", message:"로딩중"});
			console.log(pageNo);
			Ext.data.JsonP.request({
				url: "http://172.16.1.141:8080/mobileWebSu/sentouch/ch05/jsonp_data2.jsp",
				params: {pageNO:pageNo},
				callbackKey: "serverKey",
				success: function(result){
					Ext.Viewport.setMasked(false);
					displayPhoneList(result);
					if(pageNo==1){
						btnPrev.hide();
						btnNext.show();
					} else if(pageNo==2){
						btnPrev.show();
						btnNext.hide();
					}
				},
				failure: function(result){
					Ext.Viewport.setMasked(false);
					Ext.Msg.alert("알림", "서버 접속 또는 서버 실행 오류");
				}
			});
		};
		
		var navBar = Ext.create("Ext.TitleBar", {
			docked:"top",
			title:"폰목록",
			items: [btnPrev, btnNext]
		});
		
		var listPanel = Ext.create("Ext.Panel");
		getPhoneList(1);
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [navBar, listPanel]
		});
		Ext.Viewport.add(rootPanel);
	}
});