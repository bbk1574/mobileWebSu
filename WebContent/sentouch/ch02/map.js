Ext.application({
	name: "MyApp",
	launch: function(){
		var mapComponent = Ext.create("Ext.Map");
		
		function showDeviceLocation() {
			if (navigator.geolocation){
				navigator.geolocation.getCurrentPosition(
					function (position){
						//장비의 위도 경도 얻기
						var lat = position.coords.latitude;
						var lng = position.coords.longitude;
						var latlng = new google.maps.LatLng(lat, lng);
						//장비의 위치를 지도의 중앙으로 설정
						var googleMap = mapComponent.getMap();
						googleMap.setZoom(16);
						googleMap.setCenter(latlng);
						//장비의 위치에 마커 표시
						var marker = new google.maps.Marker({
							position: latlng,
							map: googleMap
						});
					},
					function (error) {
						Ext.Msg.alert(error.message);
					}
				);
			} else {
				Ext.Msg.alert("이 브라우저는 Geolocation을 지원하지 않습니다.");
			}
		}
		showDeviceLocation();
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "fit",
			items: [ mapComponent ]
		});
		Ext.Viewport.add(rootPanel);
	}
});