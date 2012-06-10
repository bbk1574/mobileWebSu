<%@ page language="java" contentType="text/html; charset=EUC-KR" %>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>

<% response.setHeader("cache-control", "no-cache"); %>

<%
List<String[]> phoneDb = (List<String[]>) session.getAttribute("phoneDb");
if(phoneDb == null){
	phoneDb = new ArrayList<String[]>();
	phoneDb.add(new String[] {"p1", "������ A", "phone01.png", "�Ｚ", "600000", "����"});
	phoneDb.add(new String[] {"p2", "������ A", "phone01.png", "�Ｚ", "600000", "����"});
	phoneDb.add(new String[] {"p3", "������ A", "phone01.png", "�Ｚ", "600000", "����"});
	phoneDb.add(new String[] {"p4", "������ A", "phone01.png", "�Ｚ", "600000", "����"});
	
	phoneDb.add(new String[] {"p5", "������ A", "phone01.png", "�Ｚ", "600000", "����"});
	phoneDb.add(new String[] {"p6", "������ A", "phone01.png", "�Ｚ", "600000", "����"});
	phoneDb.add(new String[] {"p7", "������ A", "phone01.png", "�Ｚ", "600000", "����"});
	phoneDb.add(new String[] {"p8", "������ A", "phone01.png", "�Ｚ", "600000", "����"});

	phoneDb.add(new String[] {"p9", "������ A", "phone01.png", "�Ｚ", "600000", "����"});
	phoneDb.add(new String[] {"p10", "������ A", "phone01.png", "�Ｚ", "600000", "����"});
	phoneDb.add(new String[] {"p11", "������ A", "phone01.png", "�Ｚ", "600000", "����"});
	phoneDb.add(new String[] {"p12", "������ A", "phone01.png", "�Ｚ", "600000", "����"});
}

int currentPage = Integer.parseInt(request.getParameter("currentPage"));
int limit = 4;
int start = (currentPage -1) * limit;
int totalPage = phoneDb.size() /limit;

if (phoneDb.size()%limit !=0) totalPage++;
%>

<div id="phonelist" data-role="page" data-theme="a">
	<div data-role="header" data-position="fixed" data-theme="a">
		<h1>�� ���</h1>
		<% if(currentPage > 1){ %>
			<a href="phonelist.jsp?currentPage=<%=currentPage-1 %>" data-role="button"
				data-icon="arrow-l" data-direction="reverse">����</a>
		<% } %>
		<% if(currentPage < totalPage){ %>
			<a href="phonelist.jsp?currentPage=<%=currentPage+1%>" data-role="button"
				data-icon="arrow-r" data-iconpos="right" class="ui-btn-right">����</a>
		<% } %>
	</div>
	<div data-role="content">
		<ul data-role="listview">
			<%for(int i = start; i<(start+limit) && i<phoneDb.size(); i++) {%>
			<li>
				<a href="phonedetail.jsp?pno=<%=phoneDb.get(i)[0]%>&currentPage=<%=currentPage%>">
					<table>
						<tr>
							<td style="padding-right: 5px">
								<img src="../../image/<%=phoneDb.get(i)[2] %>" style="width: 30px; height: 50px" />
							</td>
							<td style="padding-left: 5px"><%=phoneDb.get(i)[1] %></td>
						</tr>
					</table>
				</a>
			</li>
			<% } %>
		</ul>
	</div>
	<div data-role="footer" data-position="fixed" data-theme="a">
		<div data-role="navbar">
			<ul>
				<li>
					<a href="#home" data-icon="home" data-transition="slide" data-direction="reverse">��Ȩ</a>
				</li>
				<li>
					<a href="phonesaveform.jsp" data-icon="plus" data-transition="slide">�����</a>
				</li>
			</ul>
		</div>
	</div>	
</div>