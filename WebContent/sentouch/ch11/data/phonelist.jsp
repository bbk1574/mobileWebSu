<%@ page contentType="text/javascript;charset=EUC-KR"%>

<% String serverKey = request.getParameter("serverKey"); %>

<% if (serverKey != null) {%>
	<%=serverKey%>(
		{
			"name": "phonelist",
			"data": [
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
		}
	);
<%}%>