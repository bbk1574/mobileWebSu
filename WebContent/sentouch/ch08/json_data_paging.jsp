<%@ page contentType="text/plain;charset=euc-kr" %>

<%@ page import="java.util.*" %>

<%
List<String[]> phoneDb = (List<String[]>) session.getAttribute("phoneDb");
if(phoneDb == null) {
	phoneDb = new ArrayList<String[]>();
	phoneDb.add(new String[] {"p1", "갤럭시 A", "phone01.png"});
	phoneDb.add(new String[] {"p2", "갤럭시 에이스", "phone02.png"});
	phoneDb.add(new String[] {"p3", "갤럭시 지오", "phone03.png"});
	phoneDb.add(new String[] {"p4", "갤럭시 호핀", "phone04.png"});
	phoneDb.add(new String[] {"p5", "갤럭시 네오", "phone05.png"});
	phoneDb.add(new String[] {"p6", "갤럭시 S", "phone06.png"});
	phoneDb.add(new String[] {"p7", "갤럭시 S2", "phone07.png"});
	phoneDb.add(new String[] {"p8", "갤럭시 U", "phone08.png"});
	phoneDb.add(new String[] {"p9", "호수파", "phone09.png"});
	phoneDb.add(new String[] {"p10", "멀티터치", "phone10.png"});
	phoneDb.add(new String[] {"p11", "OZ옴니아", "phone11.png"});
	phoneDb.add(new String[] {"p12", "몰라폰", "phone12.png"});
	phoneDb.add(new String[] {"p13", "T옴니아", "phone13.png"});
	phoneDb.add(new String[] {"p14", "T옴니아2", "phone14.png"});
	phoneDb.add(new String[] {"p15", "울트라", "phone15.png"});
	phoneDb.add(new String[] {"p16", "울트라 스마트 U", "phone16.png"});
	phoneDb.add(new String[] {"p17", "웨이브2", "phone17.png"});
	phoneDb.add(new String[] {"p18", "와이브로", "phone18.png"});
	phoneDb.add(new String[] {"p19", "와이브로 스마트", "phone19.png"});
	phoneDb.add(new String[] {"p20", "환상폰", "phone20.png"});
	session.setAttribute("phoneDb", phoneDb);
}
%>

<%
int currentPage = Integer.parseInt(request.getParameter("page"));
int start = Integer.parseInt(request.getParameter("start"));
int limit = Integer.parseInt(request.getParameter("limit"));
int totalPage = phoneDb.size() / limit;
if(phoneDb.size()%limit != 0) totalPage++;
%>

{
	"totalPage": <%=totalPage%>,
	"page": <%=currentPage%>,
	"data": [
		<%for(int i=start; i<(start+limit) && i<phoneDb.size(); i++) {%>
				{ 
					"pno": "<%=phoneDb.get(i)[0]%>", 
					"pname": "<%=phoneDb.get(i)[1]%>", 
					"pimage": "<%=phoneDb.get(i)[2]%>" 
				},
		<%}%>
	]
}