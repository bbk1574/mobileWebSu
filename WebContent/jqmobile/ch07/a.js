$(document).bind("mobileinit", function(){
	$("#home").live("pagebeforeshow", function(event, ui){
		btnShowAndHide();
	});	
});

function btnShowAndHide() {
	if($("#home").attr("data-login") == "ok"){
		$("#btnLogin").hide();
		$("#btnLogout").show();
		$("#btnPhoneList").attr("href", "phonelist.jsp?currentPage=1");
	} else {
		$("#btnLogin").show();
		$("#btnLogout").hide();
		$("#btnPhoneList").attr("href", "#");
	}
}
function logout(){
	$("#home").attr("data-login", "");
	btnShowAndHide();
}

function login(){
	var uid = $("#uid").attr("value");
	var upassword = $("#upassword").attr("value");
	$.mobile.changePage("login.jsp?uid=" + uid + "&upassword=" + upassword);
}

function phonesave(){
	var pname = $("#pname").attr("value");
	var pcolor = $("#phonesaveform input[name=pcolor]:checked").attr("value");
	var pimage = $("#pimage").attr("value");
	var pcompany = $("#pcompany").attr("value");
	var pprice = $("#pprice").attr("value");
	
	var param = "pname="+encodeURI(pname);
	param += "&pimage="+pimage;
	param += "&pcolor="+encodeURI(pcolor);
	param += "&pcompany="+encodeURI(pcompany);
	param += "&pprice="+pprice;
	$.mobile.changePage("phonesave.jsp?" + param);
}

function selectphone(pimage){
	$("#pimage").attr("value", pimage);
}