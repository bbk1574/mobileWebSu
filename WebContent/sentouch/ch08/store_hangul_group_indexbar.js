Ext.application({
	name: "MyApp",
	launch: function() {
		Ext.define("MyApp.Phone", {
			extend: "Ext.data.Model",
			config: {
				fields: ["name", "tel"]
			}
		});
		
		var contactStore = Ext.create("Ext.data.Store", {
			model: "MyApp.Phone",
			groupDir: "ASC",
			grouper: {
				sortProperty: "name",
				groupFn: function(model){
					var jaum = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
					var hcode = model.data.name[0].charCodeAt(0) - 0xAC00;
					var indexJaum = parseInt(hcode / 588);
					var result = jaum.charAt(indexJaum);
					return result;
				}
			},
			autoLoad: true,
			data:  [
							{ "name": "김길동", "tel": "010-123-1234" },
							{ "name": "노길동", "tel": "010-123-1234" },
							{ "name": "도길동", "tel": "010-123-1234" },
							{ "name": "마길동", "tel": "010-123-1234" },
							{ "name": "박길동", "tel": "010-123-1234" },
							{ "name": "신길동", "tel": "010-123-1234" },
							{ "name": "이길동", "tel": "010-123-1234" },
							{ "name": "장길동", "tel": "010-123-1234" },
							{ "name": "채길동", "tel": "010-123-1234" },
							{ "name": "탁길동", "tel": "010-123-1234" },
							{ "name": "한길동", "tel": "010-123-1234" },				        
							{ "name": "강길동", "tel": "010-123-1234" },
							{ "name": "남궁길동", "tel": "010-123-1234" },
							{ "name": "독고길동", "tel": "010-123-1234" },
							{ "name": "맹길동", "tel": "010-123-1234" },
							{ "name": "백길동", "tel": "010-123-1234" },
							{ "name": "서길동", "tel": "010-123-1234" },
							{ "name": "양길동", "tel": "010-123-1234" },
							{ "name": "전길동", "tel": "010-123-1234" },
							{ "name": "추길동", "tel": "010-123-1234" },
							{ "name": "오길동", "tel": "010-123-1234" },
							{ "name": "황길동", "tel": "010-123-1234" }
						]
		});
		
		var contactList = Ext.create("Ext.dataview.List", {
			store: contactStore,
			itemTpl: "{name}",
			grouped: true,
			indexBar: {
				letters: ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]	
			}
		});
		
		var navBar = Ext.create("Ext.TitleBar", {
			docked: "top",
			title: "연락처 목록"
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			layout: "fit",
			items: [navBar, contactList]
		});
		Ext.Viewport.add(rootPanel);
	}
})