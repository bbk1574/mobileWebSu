<%@ page contentType="text/javascript;charset=euc-kr" %>

<%
	String mid = request.getParameter("mid");

	if(mid != null && mid.equals("user2")){
		String funName = request.getParameter("serverKey");
		if(funName != null){
%>
		<%=funName%>(
			{
				"name" : "ȫ�浿",
				"age" : 35,
				"address" : "����� ��õ��",
				"drinks": ["����", "ȫ��", "�λ���"],
				"kids": [
					{ "name": "����", "age" : 18},
					{ "name": "��ȣ", "age" : 12}
				]
			}
		);
		<%}%>			
<%}%>