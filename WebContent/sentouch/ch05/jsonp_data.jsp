<%@ page contentType="text/javascript; charset=EUC-KR" %>

<% 
	String funName = request.getParameter("serverKey");
	
	if (funName != null){
%>
	<%=funName %>(
		[
			{
				"pno": "p1",
				"pname": "������ A",
				"pimage": "phone01.png"
			},
			
			{
				"pno": "p2",
				"pname": "������ ���̽�",
				"pimage": "phone02.png"
			},
			{
				"pno": "p3",
				"pname": "������ ����",
				"pimage": "phone03.png"
			},
			{
				"pno": "p4",
				"pname": "������ ȣ��",
				"pimage": "phone04.png"
			},
		]
	);
<% } %>	