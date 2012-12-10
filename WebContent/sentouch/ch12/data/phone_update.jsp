<%@ page contentType="application/javascript;charset=utf-8"%>
<%@ page import="java.util.*, java.net.*"%>

<%!
	String toKo(String data){
		String result = null;
		try {
			result = URLDecoder.decode(data, "utf-8");
		} catch(Exception e) {}
		return result;
	}
%>

<%-- 수정 Phone 객체 얻기 --%>
<%
	String[] updatePhone = {
		request.getParameter("pno"),
		toKo(request.getParameter("pname")),
		request.getParameter("pimage"),
		toKo(request.getParameter("pcompany")),
		request.getParameter("pprice"),
		toKo(request.getParameter("pcolor"))	
	};
%>

<%
	List<String[]> phoneDb = (List<String[]>) session.getAttribute("phoneDb");
	for(String[] phone: phoneDb){
		if(phone[0].equals(updatePhone[0])){
			phoneDb.remove(phone);
			phoneDb.add(updatePhone);
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