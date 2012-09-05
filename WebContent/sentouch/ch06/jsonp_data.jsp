<%@ page contentType="text/javascript;charset=euc-kr" %>

<%
	String mid = request.getParameter("mid");

	if(mid != null && mid.equals("user2")){
		String funName = request.getParameter("serverKey");
		if(funName != null){
%>
		<%=funName%>(
			{
				"name" : "È«±æµ¿",
				"age" : 35,
				"address" : "¼­¿ï½Ã ÃáÃµ½Ã",
				"drinks": ["³ìÂ÷", "È«Â÷", "ÀÎ»ïÂ÷"],
				"kids": [
					{ "name": "¼ö¹Î", "age" : 18},
					{ "name": "¼öÈ£", "age" : 12}
				]
			}
		);
		<%}%>			
<%}%>