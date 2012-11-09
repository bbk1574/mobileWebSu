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
    onPhoneListViewShow: function(){
    	console.log("onPhoneListViewShow");
    	var phoneStore = Ext.getStore("PhoneStore");
    	phoneStore.load();
    	this.getPhoneList().setStore(phoneStore);
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});