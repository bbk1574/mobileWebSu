<%@ page contentType="application/x-json;charset=euc-kr" %>

<%
	String mid = request.getParameter("mid");

	if(mid != null && mid.equals("user1")){
%>
		{
			"name":"신용권",
			"age": 45,
			"address": "서울시 강동구",
			"drinks": ["커피", "사이다", "생수"],
			"kids": [
				{ "name": "민규", "age": 11},
				{ "name": "민희", "age": 6}
			]
		}
<%}%>