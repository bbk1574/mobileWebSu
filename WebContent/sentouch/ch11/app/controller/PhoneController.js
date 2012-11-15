Ext.define('MyApp.controller.PhoneController', {
	extend: 'Ext.app.Controller',
    
	config: {
		refs: {
			phoneList: "phonelistview list"
		},

		control: {
			"phonelistview": {
				show: "onPhoneListViewShow"
			}
		}
	},
    
	onPhoneListViewShow: function() {
		var phoneStore = Ext.getStore("PhoneStore");
		phoneStore.load();
		this.getPhoneList().setStore(phoneStore);
	}
});