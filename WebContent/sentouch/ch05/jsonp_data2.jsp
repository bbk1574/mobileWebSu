<%@ page contentType="text/javascript; charset=EUC-KR" %>

<% 
	String funName = request.getParameter("serverKey");
	System.out.println(funName);
	int pageNo = Integer.parseInt(request.getParameter("pageNO"));
	System.out.println(pageNo);

	if (funName != null){
%>
	<%=funName %>(
		<%if(pageNo == 1){ %>
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
		<%} else if(pageNo == 2){ %>
			[
				{
					"pno": "p5",
					"pname": "������ S",
					"pimage": "phone05.png"
				},
				
				{
					"pno": "p6",
					"pname": "������ ���̽�",
					"pimage": "phone06.png"
				},
				{
					"pno": "p7",
					"pname": "������ ����",
					"pimage": "phone07.png"
				},
				{
					"pno": "p8",
					"pname": "������ ȣ��",
					"pimage": "phone08.png"
				},
			]	
		<%}%>
		);
<% } %>	