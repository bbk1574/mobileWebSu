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
					"pname": "°¶·°½Ã È£ÇÉ",
					"pimage": "phone04.png"
				},
			]
		<%} else if(pageNo == 2){ %>
			[
				{
					"pno": "p5",
					"pname": "°¶·°½Ã S",
					"pimage": "phone05.png"
				},
				
				{
					"pno": "p6",
					"pname": "°¶·°½Ã ¿¡ÀÌ½º",
					"pimage": "phone06.png"
				},
				{
					"pno": "p7",
					"pname": "°¶·°½Ã Áö¿À",
					"pimage": "phone07.png"
				},
				{
					"pno": "p8",
					"pname": "°¶·°½Ã È£ÇÉ",
					"pimage": "phone08.png"
				},
			]	
		<%}%>
		);
<% } %>	