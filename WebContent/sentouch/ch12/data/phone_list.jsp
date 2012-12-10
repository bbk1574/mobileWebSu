<%@ page contentType="text/javascript;charset=utf-8"%>
<%@ page import="java.util.*"%>

<%-- PhoneDB 생성 및 얻기 --%>
<%
	List<String[]> phoneDb = (List<String[]>) session.getAttribute("phoneDb");
	if(phoneDb == null){
		phoneDb = new ArrayList<String[]>();
		phoneDb.add(new String[] {"p1", "갤럭시 A", "phone01.png", "삼성", "600000", "검정"});
		phoneDb.add(new String[] {"p2", "옵티머스 원", "phone02.png", "엘지", "500000", "흰색"});
		phoneDb.add(new String[] {"p3", "갤럭시 S", "phone03.png", "삼성", "700000", "검정"});
		phoneDb.add(new String[] {"p4", "갤럭시 S2", "phone04.png", "삼성", "800000", "흰색"});
		session.setAttribute("phoneDb", phoneDb);
	}
%>

<%-- 응답 생성 --%>
<%	String funName = request.getParameter("serverKey");	%>
	<%=funName%>(
		[
			<% for(int i=0; i<phoneDb.size(); i++) {%>
				{
					"pno": "<%=phoneDb.get(i)[0]%>",
					"pname": "<%=phoneDb.get(i)[1]%>",
					"pimage": "<%=phoneDb.get(i)[2]%>",
					"pcompany": "<%=phoneDb.get(i)[3]%>",
					"pprice": <%=phoneDb.get(i)[4]%>,
					"pcolor": "<%=phoneDb.get(i)[5]%>"
				},
			<% } %>
		]
	);
					