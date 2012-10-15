<%@ page contentType="text/javascript;charset=euc-kr" %>

<% String serverKey = request.getParameter("serverKey");%>

<% if(serverKey != null){%>
	<%=serverKey%>(
		{
			"name": "phonelist",
			"data": [
				{
					"pno": "p1",
					"pname": "°¶·°½Ã A",
					"pimage": "phone01.png"
				},
				{
					"pno": "p2",
					"pname": "°¶·°½Ã ¿¡ÀÌ½º",
					"pimage": "phone02.png"
				},
				{
					"pno": "p3",
					"pname": "°¶·°½Ã Áö¿À",
					"pimage": "phone03.png"
				},
				{
					"pno": "p4",
					"pname": "°¶·°½Ã A",
					"pimage": "phone04.png"
				}	
			]
		}
	);
<%}%>