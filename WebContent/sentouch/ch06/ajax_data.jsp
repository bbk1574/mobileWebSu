<%@ page contentType="application/x-json;charset=euc-kr" %>

<%
	String mid = request.getParameter("mid");

	if(mid != null && mid.equals("user1")){
%>
		{
			"name":"�ſ��",
			"age": 45,
			"address": "����� ������",
			"drinks": ["Ŀ��", "���̴�", "����"],
			"kids": [
				{ "name": "�α�", "age": 11},
				{ "name": "����", "age": 6}
			]
		}
<%}%>