Ext.define('Phonem.controller.UserController', {
    extend: 'Ext.app.Controller',
    requires: ["Ext.data.JsonP"],
    
    config: {
        refs: {
        	userPanel: {
        		selector: "userpanel",
        		xtype: "userpanel",
        		autoCreate: true
        	},
        	titleBar: "userpanel titlebar",
        	userLoginForm: {
        		selector: "userloginform",
        		xtype: "userloginform",
        		autoCreate: true
        	}
        },
        control: {
            "userpanel button[action=main]": {
            	tap: "onBtnMainTap"
            },
            "userloginform button[action=login]": {
            	tap: "onBtnLoginTap"
            }
        }
    },
    showLoginForm: function(){
    	this.getUserPanel().setActiveItem(this.getUserLoginForm());
    	this.getTitleBar().setTitle("Login");
    	Ext.Viewport.getLayout().setAnimation({type: "slide", direction: "left"});
    	Ext.Viewport.setActiveItem(this.getUserPanel());
    },
    onBtnMainTap: function(btn, event) {
    	var mainController = this.getApplication().getController("MainController");
    	Ext.Viewport.getLayout().setAnimation({type: "slide", direction: "right"});
    	Ext.Viewport.setActiveItem(mainController.getMain());
    },
    onBtnLoginTap: function(btn, event) {
    	Ext.Viewpoet.setMasked({xtype: 'loadmask', message: '로그인...'});
    	Ext.data.JsonP.request({
    		url: "http://172.16.1.129:8080/mobileWebSu/sentouch/ch12/data/user_login.jsp",
    		params: {
    			uid: this.getUserloginForm().query("[name='uid']")[0].getValue(),
    			upassword: this.getUserLoginForm().query("[name='upassword]")[0].getValue()
    		},
    		callbackKey: "serverKey",
    		scope:this,
    		success: function(result){
    			Ext.Viewport.setMasked(false);
    			if(result.message == "success"){
    				Ext.Msg.alert("알림", "로그인 성공");
    				var user = Ext.create("Phonem.model.User", {
    					uid: result.uid,
    					uname: result.uname,
    					upassword: result.upassword
    				});
    				var mainController = this.getApplication().getController("MainController");
    				var main = mainController.getMain();
    				main.setUser(user);
    				Ext.Viewport.getLayout().setAnimation({type: "slide", direction: "right"});
    				Ext.Viewport.setActiveItem(main);
    			} else {
    				Ext.Msg.alert("알림", "로그인 실패:"+result.why);
    			}
    		},
    		failure: function(result){
    			Ext.Viewport.setMasked(false);
    			Ext.Msg.alert("알림", "서버 접속 실패 또는 서버 실행 오류");
    		}
    	})
    }
 	
});