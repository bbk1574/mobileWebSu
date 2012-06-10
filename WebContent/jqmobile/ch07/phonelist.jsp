<%@ page language="java" contentType="text/html; charset=EUC-KR" %>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>

<% response.setHeader("cache-control", "no-cache"); %>

<%
List<String[]> phoneDb = (List<String[]>) session.getAttribute("phoneDb");
if(phoneDb == null){
	phoneDb = new ArrayList<String[]>();
	phoneDb.add(new String[] {"p1", "°¶·°½Ã A", "phone01.png", "»ï¼º", "600000", "°ËÁ¤"});
	phoneDb.add(new String[] {"p2", "°¶·°½Ã A", "phone01.png", "»ï¼º", "600000", "°ËÁ¤"});
	phoneDb.add(new String[] {"p3", "°¶·°½Ã A", "phone01.png", "»ï¼º", "600000", "°ËÁ¤"});
	phoneDb.add(new String[] {"p4", "°¶·°½Ã A", "phone01.png", "»ï¼º", "600000", "°ËÁ¤"});
	
	phoneDb.add(new String[] {"p5", "°¶·°½Ã A", "phone01.png", "»ï¼º", "600000", "°ËÁ¤"});
	phoneDb.add(new String[] {"p6", "°¶·°½Ã A", "phone01.png", "»ï¼º", "600000", "°ËÁ¤"});
	phoneDb.add(new String[] {"p7", "°¶·°½Ã A", "phone01.png", "»ï¼º", "600000", "°ËÁ¤"});
	phoneDb.add(new String[] {"p8", "°¶·°½Ã A", "phone01.png", "»ï¼º", "600000", "°ËÁ¤"});

	phoneDb.add(new String[] {"p9", "°¶·°½Ã A", "phone01.png", "»ï¼º", "600000", "°ËÁ¤"});
	phoneDb.add(new String[] {"p10", "°¶·°½Ã A", "phone01.png", "»ï¼º", "600000", "°ËÁ¤"});
	phoneDb.add(new String[] {"p11", "°¶·°½Ã A", "phone01.png", "»ï¼º", "600000", "°ËÁ¤"});
	phoneDb.add(new String[] {"p12", "°¶·°½Ã A", "phone01.png", "»ï¼º", "600000", "°ËÁ¤"});
}

int currentPage = Integer.parseInt(request.getParameter("currentPage"));
int limit = 4;
int start = (currentPage -1) * limit;
int totalPage = phoneDb.size() /limit;

if (phoneDb.size()%limit !=0) totalPage++;
%>

<div id="phonelist" data-role="page" data-theme="a">
	<div data-role="header" data-position="fixed" data-theme="a">
		<h1>Æù ¸ñ·Ï</h1>
		<% if(currentPage > 1){ %>
			<a href="phonelist.jsp?currentPage=<%=currentPage-1 %>" data-role="button"
				data-icon="arrow-l" data-direction="reverse">ÀÌÀü</a>
		<% } %>
		<% if(currentPage < totalPage){ %>
			<a href="phonelist.jsp?currentPage=<%=currentPage+1%>" data-role="button"
				data-icon="arrow-r" data-iconpos="right" class="ui-btn-right">´ÙÀ½</a>
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
					<a href="#home" data-icon="home" data-transition="slide" data-direction="reverse">¾ÛÈ¨</a>
				</li>
				<li>
					<a href="phonesaveform.jsp" data-icon="plus" data-transition="slide">Æùµî·Ï</a>
				</li>
			</ul>
		</div>
	</div>	
</div>