<%@ page contentType="application/javascript;charset=utf-8"%>
<%@ page import="java.util.*"%>

<%-- Phone 객체 삭제 --%>
<%
	String deletePno = request.getParameter("pno");
	List<String[]> phoneDb = (List<String[]>) session.getAttribute("phoneDb");
	for(String[] phone: phoneDb){
		if(phone[0].equals(deletePno)){
			phoneDb.remove(phone);
			break;
		}
	}
%>

<%-- 응답 생성 --%>
<%	String funName = request.getParameter("serverKey");%>
	<%=funName%>(
		{
			"message": "success"
		}
	);