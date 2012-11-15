Ext.define('MyApp.controller.desktopprofile.MainController', {
	extend: 'Ext.app.Controller',  
		
	config: {
		refs: {
			main: "main"
		},
		control: {
			"main menulistview": {
				itemtap: "onMenuListViewOnItemTap"
			}
		}
	},

	onMenuListViewOnItemTap: function(dataview, index, target, record, e, eOpts ) {
		switch(index) {
			case 0:
				this.getMain().setActiveItem(0);
				break;
			case 1:
				this.getMain().setActiveItem(1);
				break;
			case 2:
				this.getMain().setActiveItem(2);
				break;
		}
	}
});