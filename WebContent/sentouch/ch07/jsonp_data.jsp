<%@ page contentType="text/javascript;charset=euc-kr" %>

<%
String serverKey = request.getParameter("serverKey");
String pno = request.getParameter("pno");
%>

<%if(serverKey != null) {%>
		<%=serverKey%>(
			<%if(pno.equals("p1")) {%>
					{ 
						"pno": "p1",
						"pname": "������A", 
						"pimage": "phone01.png" 
					}
			<%} else if(pno.equals("p2")) {%>
					{ 
						"pno": "p2",
						"pname": "������ ���̽�", 
						"pimage": "phone02.png" 
					}
			<%} else if(pno.equals("p3")) {%>		
					{ 
						"pno": "p3",
						"pname": "������ ����", 
						"pimage": "phone03.png" 
					}	
			<%}%>
		);
<%}%>