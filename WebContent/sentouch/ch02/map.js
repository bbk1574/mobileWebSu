Ext.application({
	name: "MyApp",
	launch: function(){
		var mapComponent = Ext.create("Ext.Map");
		
		function showDeviceLocation() {
			if (navigator.geolocation){
				navigator.geolocation.getCurrentPosition(
					function (position){
						//����� ���� �浵 ���
						var lat = position.coords.latitude;
						var lng = position.coords.longitude;
						var latlng = new google.maps.LatLng(lat, lng);
						//����� ��ġ�� ������ �߾����� ����
						var googleMap = mapComponent.getMap();
						googleMap.setZoom(16);
						googleMap.setCenter(latlng);
						//����� ��ġ�� ��Ŀ ǥ��
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
				Ext.Msg.alert("�� �������� Geolocation�� �������� �ʽ��ϴ�.");
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