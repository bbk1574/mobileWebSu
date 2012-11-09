Ext.define("MyApp.store.PhoneStore", {
	extend: "Ext.data.Store",
	xtype: "phonestore",
	requires: ["Ext.data.proxy.JsonP"],
	config: {
		storeId: "PhoneStore",
		model: "MyApp.model.Phone",
		proxy: {
			type: "jsonp",
			url: "http://192.168.6.113:8080/mobileWebSu/sentouch/ch10/data/phonelist.jsp",
			callbackKey: "serverKey",
			reader: {
				type: "json",
				rootProperty: "data"
			}
		}
	}
});