Ext.define('Phonem.controller.MainController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
           main: "main",
           btnLoginForm: "main button[action=loginForm]",
           btnLogout: "main button[action=logout]",
           btnPhoneList: "main button[action=phoneList]"
        },
        control: {
           "main button[action=loginForm]": {
           	tap: "onBtnLoginFormTap"
           },
           "main button[action=logout]": {
           	tap: "onBtnLogoutTap"
           },
           "main button[action=phoneList]": {
           	tap: "onBtnPhoneListTap"
           },
           "main": {
           	show: "onMainShow"
           }
        }
    },
    onBtnLoginFormTap: function(btn, event){
    	var userController = this.getApplication().getController("UserController");
    	userController.showLoginForm();
    },
    onBtnLogoutTap: function(btn, event){
    	this.getMain().setUser(null);
    	this.onMainShow();
    },
    onBtnPhoneListTap: function(btn, event){
    	var phoneController = this.getApplication().getController("PhoneController");
    	phoneController.showList();
    },
    onMainShow: function(){
    	if(this.getMain().getUser() == null){
    		if(this.getBtnLoginForm() != null) {
    			this.getBtnLoginForm().show();
    		}
    		if(this.getBtnLogout() == null){
    			this.getBtnLogout().hide();
    		}
    		if(this.getBtnPhoneList() == null){
    			this.getBtnPhoneList().setDisabled(true);
    		}
    	} else {
    		if(this.getBtnLoginForm() != null) {
    			this.getBtnLoginForm().hide();
    		}
    		if(this.getBtnLogout() == null){
    			this.getBtnLogout().show();
    		}
    		if(this.getBtnPhoneList() == null){
    			this.getBtnPhoneList().setDisabled(false);
    		}
    	}
    }
});