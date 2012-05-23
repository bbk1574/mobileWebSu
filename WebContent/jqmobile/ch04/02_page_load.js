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
});