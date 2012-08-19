<%@ page language="java" contentType="application/x-json;charset=UTF-8" %>

<%
	String mid = request.getParameter("mid");
	String mpassword = request.getParameter("mpassword");
	
	String message = null;
	if(mid != null && mpassword != null){
		if(mid.equals("user")){
			if(mpassword.equals("12345")){
				message = "로그인 성공";
			} else {
				message = "패스워드 틀림";
			}
		} else {
			message = "아이디가 존재하지 않음";
		}
	} else {
		message = "아이디와 패스워드가 필요함";
	}
	
	if(message.equals("로그인 성공")) {
%>
		{
			"success": true,
			"loginResult": "success"
		}
<% 	} else { %>
		{
			"success": true,
			"loginResult": "fail",
			"message": "<%=message%>"
		}
<% 	} %>