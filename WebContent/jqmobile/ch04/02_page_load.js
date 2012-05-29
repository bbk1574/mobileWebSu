$(document).bind("mobileinit", function(){
	$(document).bind("pagebeforeload", function(event, data){
		console.log("pagebeforeload........................");
		console.log("url: " + data.url);
		console.log("absUrl: " + data.absUrl);
		console.log("dataUrl: " + data.dataUrl);
	});
	$(document).bind("pageload", function(event, data){
		console.log("pageload........................");
		console.log("url: " + data.url);
		console.log("absUrl: " + data.absUrl);
		console.log("dataUrl: " + data.dataUrl);
	});
	$(document).bind("pageloadfailed", function(event, data){
		console.log("pageloadfailed........................");
		console.log("url: " + data.url);
		console.log("absUrl: " + data.absUrl);
		console.log("dataUrl: " + data.dataUrl);
	});
	$("#homePage").live("pageshow", function(event, ui){
		if(ui.prevPage.attr("id")=="secondPage"){
			#("#info").append("Second Page에서 이동되었습니다. <br/>");
		} else if(ui.prevPage.attr("id")=="thirdPage"){
			#("#info").append("Third Page에서 이동되었습니다. <br/>");
		}
	});
});
$(function() {
	if(window.orientation == 0) {
		$("#backImg").attr("src", "../../image/big-image-portrait.png");
	} else {
		$("#backImg").attr("src", "../../image/big-image-landscape.png");
	}
	$(window).bind("orientationchange", function(event) {
		if(event.orientation == "portrait") {
			$("#backImg").attr("src", "../../image/big-image-portrait.png");
		} else {
			$("#backImg").attr("src", "../../image/big-image-landscape.png");
		}
	});
});