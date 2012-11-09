Ext.define('MyApp.controller.LoginController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            main: "main",
            memberId: "loginformview textfield",
            memberPassword: "loginformview passwordfield"
        },
        control: {
            "#btnLogin": {
            //"#loginformview button[action=login]": {
       		//"#loginformview button[action=login]": {
            //"#loginformview button: {
            	tap: "onBtnLoginTap"
            }
        }
    },
    
    onBtnLoginTap: function(btn, e){
    	var memberId = this.getMemberId().getValue();
    	var memberpassword = this.getMemberPassword().getValue();
    	if(memberId == "user" && memberpassword == "123456") {
    		this.getMain().setActiveItem(0);
    		this.getMain().getTabBar().getAt(1).setTitle("Logout");
    	} else {
    		Ext.Msg.alert("알림", "로그인 실패");
    	}
    }
});