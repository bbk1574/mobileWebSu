<%@ page contentType="text/xml;charset=euc-kr" %>

<% 
	String pno = request.getParameter("pno");
	
	if(pno==null || pno.equals("p1")){
%>
	<phone>
		<pno>p1</pno>
		<pname>갤럭시A</pname>
		<pimage>phone01.png</pimage>
	</phone>
<% } else if(pno.equals("p2")) {%>
	<phone>
		<pno>p2</pno>
		<pname>갤럭시 에이스</pname>
		<pimage>phone02.png</pimage>
	</phone>
<% } else if(pno.equals("p3")) {%>
	<phone>
		<pno>p3</pno>
		<pname>갤럭시 지오</pname>
		<pimage>phone03.png</pimage>
	</phone>
<%}%>