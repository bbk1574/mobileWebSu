Ext.application({
	name: "MyApp",
	launch: function(){
		var homeView = Ext.create("Ext.Panel", {
			style: "background-color: #ff0000"
		});
		
		var loginView = Ext.create("Ext.Panel", {
			style: "background-color: #00ff00"
		});
		
		var listView = Ext.create("Ext.Panel", {
			style: "background-color: #0000ff"
		});
		
		var btnHomeView = Ext.create("Ext.Button", {
			text:"Home",
			ui:"back",
			align:"left",
			hidden:true,
			handler: function(btn, event) {
				rootPanel.getLayout().setAnimation({type:"slide", direction:"right"});
				rootPanel.setActiveItem(homeView);
				navbar.setTitle("HomeView");
				btnHomeView.hide();
				btnLoginViewRight.show();
				btnLoginViewLeft.hide();
				btnListView.hide();
			}
		});
		
		var btnLoginViewRight = Ext.create("Ext.Button", {
			text:"Login",
			ui:"forword",
			align:"right",
			handler: function(btn, event) {
				rootPanel.getLayout().setAnimation({type:"slide", direction:"left"});
				rootPanel.setActiveItem(loginView);
				navbar.setTitle("LoginView");
				btnHomeView.show();
				btnLoginViewRight.hide();
				btnLoginViewLeft.hide();
				btnListView.show();
			}
		});
		
		var btnLoginViewLeft = Ext.create("Ext.Button", {
			text:"Login",
			ui:"forword",
			align:"left",
			hidden:true,
			handler: function(btn, event) {
				rootPanel.getLayout().setAnimation({type:"slide", direction:"right"});
				rootPanel.setActiveItem(loginView);
				navbar.setTitle("LoginView");
				btnHomeView.show();
				btnLoginViewRight.hide();
				btnLoginViewLeft.hide();
				btnListView.show();
			}
		});
		
		var btnListView = Ext.create("Ext.Button", {
			text:"List",
			ui:"forword",
			align:"right",
			hidden:true,
			handler: function(btn, event) {
				rootPanel.getLayout().setAnimation({type:"slide", direction:"left"});
				rootPanel.setActiveItem(listView);
				navbar.setTitle("ListView");
				btnHomeView.hide();
				btnLoginViewRight.hide();
				btnLoginViewLeft.show();
				btnListView.hide();
			}
		});
		
		var navbar = Ext.create("Ext.TitleBar", {
			docked: "top",
			ui:"light",
			title:"HomeView",
			items: [btnHomeView, btnLoginViewRight, btnLoginViewLeft, btnListView]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "card",
			items: [navbar, homeView ]
		});
		Ext.Viewport.add(rootPanel);
	}
});