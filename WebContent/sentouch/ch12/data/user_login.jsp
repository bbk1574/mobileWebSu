<%@ page contentType="text/javascript;charset=euc-kr"%>

<%--�α��� ó�� --%>
<%
	int result = -1;
	String uid = request.getParameter("uid");
	String upassword = request.getParameter("upassword");
	if(uid.equals("user") && upassword.equals("12345")){
		result = 0 ;
	} else if (!uid.equals("user")){
		result = 1;
	} else if (!upassword.equals("12345")){
		result = 2;
	}
%>

<%-- ���� ���� --%>
<%	String funName = request.getParameter("serverKey"); %>
		<%=funName%>(
			<%if(result == 0) { %>
				{
					message: "success",
					uid: "user",
					upassword: "12345"
				}
			<%} else if(result == 1) { %>
				{
					message: "failure",
					why: "���̵� ����"
				}
			<%} else if(result == 2) { %>
				{
					message: "failure",
					why: "�н����� Ʋ��"
				}
			<%} %>
		);