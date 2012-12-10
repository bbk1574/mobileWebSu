Ext.define('Phonem.controller.PhoneController', {
    extend: 'Ext.app.Controller',
    
    requires: ["Ext.data.JsonP"],
    
    config: {
        refs: {
     		phonePanel: {
     			selector: "phonepanel",
     			xtype: "phonepanel",
     			autoCreate: true
     		},
     		titleBar: "phonepanel titlebar",
     		phoneList: {
     			selector: "phonelist",
     			xtype: "phonelist",
     			autoCreate: true
     		},
     		phoneForm: {
     			selector: "phoneform",
     			xtype: "phoneform",
     			autoCreate: true
     		},
     		phoneDetail: {
     			selector: "phonedetail",
     			xtype: "phonedetail",
     			autoCreate: true
     		},
     		btnMain: "phonepanel button[action=main]",
     		btnList: "phonepanel button[action=list]",
     		btnCreate: "phonepanel button[action=create]",
     		btnUpdate: "phonepanel button[action=update]",
     		btnDelete: "phonepanel button[action=delete]"
        },
        control: {
           "phonepanel button[action=main]": {
           	tap: "onBtnMainTap"
           },
           "phonepanel button[action=list]": {
           	tap: "onBtnListTap"
           },
           "phonepanel button[action=create]": {
           	tap: "onBtnCreateTap"
           },
           "phonepanel button[action=update]": {
           	tap: "onBtnUpdateTap"
           },
           "phonepanel button[action=delete]": {
           	tap: "onBtnDeleteTap"
           },
           "phonelist": {
           	itemdoubletap: "onPhoneListItemdoubletap"
           }
        }
    },
    showList: function(){
    	Ext.Viewport.getLayout().setAnimation({type:"slide", direction: "left"});
    	Ext.Viewport.setActiveItem(this.getPhonePanel());
    	this.onBtnListTap();
    },
    onBtnMainTap: function(btn, event){
    	var mainController = this.getApplication().getController("MainController");
    	Ext.Viewport.getLayout().setAnimation({type: "slide", direction: "right"});
    	Ext.Viewport.setActiveItem(mainController.getMain());
    },
    onBtnListTap: function(btn, event){
    	this.getTitleBar().setTitle("Phone List");
    	
    	var phoneStore = Ext.getStore("PhoneStore");
    	phoneStore.load();
    	phoneStore.sort("pno", "ASC");
    	
    	var phoneList = this.getPhoneList();
    	phoneList.deselect(phoneList.getSelection());
    	phoneList.setStore(phoneStore);
    	
    	var phonePanel = this.getPhonePanel();
    	phonePanel.getLayout().setAnimation({type: "slide", direction: "right"});
    	phonePanel.setActiveItem(phoneList);
    	
    	this.getBtnMain().show();
    	this.getBtnList().hide();
    	this.getBtnCreate().show();
    	this.getBtnUpdate().hide();
    	this.getBtnDelete().hide();
    },
    onBtnCreateTap: function(btn, event){
    	if(this.getPhonePanel().getActiveItem() == this.getPhoneList()){
    		this.getTitleBar().setTitle("Phone Create");
			var phone = Ext.create("Phonem.model.Phone", {
				pno:"p5",
				pname:"갤럭시New",
				pimage:"phone05.png",
				pcompany:"삼성",
				pprice:500000,
				pcolor:"검정"
			});
			this.getPhoneForm().setRecord(phone);
			
			this.getPhonePanel().getLayout().setAnimation({type: "slide", direction: "left"});
			this.getPhonePanel().setActiveItem(this.getPhoneForm());
			
			this.getBtnMain().hide();
			this.getBtnList().show();
			this.getBtnCreate().show();
			this.getBtnUpdate().hide();
			this.getBtnDelete().hide();
    	} else if (this.getPhonePanel().getActiveItem() == this.getPhoneForm()) {
    		var phoneForm = this.getPhoneForm();
    		Ext.Viewport.setMasked({xtype:"loadmask", message: "생성중..."});
    		Ext.data.JsonP.request({
    			url: "http://172.16.1.10:8080/mobileWebSu/sentouch/ch12/data/phone_create.jsp",
    			params: {
    				pno:phoneForm.query("[name=pno]")[0].getValue(),
    				pname:encodeURI(phoneForm.query("[name=pname]")[0].getValue()),
    				pimage:phoneForm.query("[name=pimage]")[0].getValue(),
    				pcompany:encodeURI(phoneForm.query("[name=pcompany]")[0].getValue()),
    				pprice:phoneForm.query("[name=pprice]")[0].getValue(),
    				pcolor:encodeURI(phoneForm.query("[name=pcolor]")[0].getValue())
    			},
    			callbackKey: "serverKey",
    			scope: this,
    			success: function(result){
    				Ext.Viewport.setMasked(false);
    				if(result.message == "success"){
    					Ext.Msg.alert("알림", "생성 성공");
    					this.onBtnListTap();
    				} else {
    					Ext.Msg.alert("알림", "생성 실패");
    				}
    			},
    			failure: function(result) {
    				Ext.Viewport.setMasked(false);
    				Ext.Msg.alert("알림", "서버 접속 실패 또는 서버 실행 오류");
    			}
    		});
    	}
    },
    onBtnUpdateTap: function(btn, event){
    	if(this.getPhonePanel().getActiveItem() == this.getPhoneDetail()){
    		this.getTitleBar().setTitle("Phone Detail");
    		
    		this.getPhoneForm().setRecord(this.getPhoneDetail().getPhone());
    		
    		this.getPhonePanel().getLayout().setAnimation({type: "slide", direction: "left"});
    		this.getPhonePanel().setActiveItem(this.getPhoneForm());
    		
    		    		
		    this.getBtnMain().hide();
		    this.getBtnList().show();
		    this.getBtnCreate().hide();
		    this.getBtnUpdate().show();
		    this.getBtnDelete().hide();
    	} else if (this.getPhonePanel().getActiveItem() == this.getPhoneForm()) {
    		var phoneForm = this.getPhoneForm();
    		Ext.Viewport.setMasked({xtype:"loadmask", message: "수정중..."});
    		Ext.data.JsonP.request({
    			url: "http://172.16.1.10:8080/mobileWebSu/sentouch/ch12/data/phone_update.jsp",
    			params: {
    				pno:phoneForm.query("[name=pno]")[0].getValue(),
    				pname:encodeURI(phoneForm.query("[name=pname]")[0].getValue()),
    				pimage:phoneForm.query("[name=pimage]")[0].getValue(),
    				pcompany:encodeURI(phoneForm.query("[name=pcompany]")[0].getValue()),
    				pprice:phoneForm.query("[name=pprice]")[0].getValue(),
    				pcolor:encodeURI(phoneForm.query("[name=pcolor]")[0].getValue())
    			},
    			callbackKey: "serverKey",
    			scope: this,
    			success: function(result){
    				Ext.Viewport.setMasked(false);
    				if(result.message == "success"){
    					Ext.Msg.alert("알림", "수정 성공");
    					this.onBtnListTap();
    				} else {
    					Ext.Msg.alert("알림", "수정 실패");
    				}
    			},
    			failure: function(result) {
    				Ext.Viewport.setMasked(false);
    				Ext.Msg.alert("알림", "서버 접속 실패 또는 서버 실행 오류");
    			}
    		});
    	}
    },
    onBtnDeleteTap: function(btn, event){
    	var phone = this.getPhoneDetail().getPhone();
    	Ext.Viewport.setMasked({xtype:"loadmask", message: "삭제중..."});
    	Ext.data.JsonP.request({
   			url: "http://172.16.1.10:8080/mobileWebSu/sentouch/ch12/data/phone_delete.jsp",
   			params: {pno:phone.data.pno},
   			callbackKey: "serverKey",
   			scope: this,
   			success: function(result){
	   			Ext.Viewport.setMasked(false);
	   			if(result.message == "success"){
	   				Ext.Msg.alert("알림", "삭제 성공");
	    			this.onBtnListTap();
	   			} else {
	    			Ext.Msg.alert("알림", "삭제 실패");
	    		}
    		},
    		failure: function(result) {
    			Ext.Viewport.setMasked(false);
    			Ext.Msg.alert("알림", "서버 접속 실패 또는 서버 실행 오류");
    		}
    	});
    },
    onPhoneListItemdoubletap: function(list, index, target, record, e, eOpts){
    	this.getTitleBar().setTitle("Phone Detail");
    	
    	this.getPhoneDetail().setPhone(record);
    	
    	this.getPhonePanel().getLayout().setAnimation({type: "slide", direction: "left"});
    	this.getPhonePanel().setActiveItem(this.getPhoneDetail());
    	
    		
	    this.getBtnMain().hide();
	    this.getBtnList().show();
	    this.getBtnCreate().hide();
	    this.getBtnUpdate().show();
	    this.getBtnDelete().show();
    }
    
});