Ext.define("Phonem.store.PhoneStore", {
	extend: "Ext.data.Store",
	
	requires: ["Ext.data.proxy.JsonP"],
	config: {
		storeId: "PhoneStore",
		model: "Phonem.model.Phone",
		proxy: {
			type: "jsonp",
			url: "http://172.16.1.10:8080/mobileWebSu/sentouch/ch12/data/phone_list.jsp",
			callbackKey: "serverKey",
			reader: {
				type: "json"
			}
		}
	}
});