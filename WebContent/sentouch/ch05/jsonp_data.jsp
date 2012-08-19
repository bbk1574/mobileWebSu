<%@ page contentType="text/javascript; charset=EUC-KR" %>

<% 
	String funName = request.getParameter("serverKey");
	
	if (funName != null){
%>
	<%=funName %>(
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
	);
<% } %>	