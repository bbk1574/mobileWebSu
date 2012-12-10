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

<%-- 신규 Phone 객체 얻기 --%>
<%
	String[] newPhone = {
		request.getParameter("pno"),
		toKo(request.getParameter("pname")),
		request.getParameter("pimage"),
		toKo(request.getParameter("pcompany")),
		request.getParameter("pprice"),
		toKo(request.getParameter("pcolor"))
	};
%>

<%-- PhoneDb에 저장 --%>
<%
	List<String[]> phoneDb = (List<String[]>) session.getAttribute("phoneDb");
	phoneDb.add(newPhone);
%>

<%-- 응답 생성 --%>
<%	String funName = request.getParameter("serverKey");%>
	<%=funName%>(
		{
			"message": "success"
		}
	);