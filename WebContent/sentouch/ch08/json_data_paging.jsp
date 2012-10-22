<%@ page contentType="text/plain;charset=euc-kr" %>

<%@ page import="java.util.*" %>

<%
List<String[]> phoneDb = (List<String[]>) session.getAttribute("phoneDb");
if(phoneDb == null) {
	phoneDb = new ArrayList<String[]>();
	phoneDb.add(new String[] {"p1", "������ A", "phone01.png"});
	phoneDb.add(new String[] {"p2", "������ ���̽�", "phone02.png"});
	phoneDb.add(new String[] {"p3", "������ ����", "phone03.png"});
	phoneDb.add(new String[] {"p4", "������ ȣ��", "phone04.png"});
	phoneDb.add(new String[] {"p5", "������ �׿�", "phone05.png"});
	phoneDb.add(new String[] {"p6", "������ S", "phone06.png"});
	phoneDb.add(new String[] {"p7", "������ S2", "phone07.png"});
	phoneDb.add(new String[] {"p8", "������ U", "phone08.png"});
	phoneDb.add(new String[] {"p9", "ȣ����", "phone09.png"});
	phoneDb.add(new String[] {"p10", "��Ƽ��ġ", "phone10.png"});
	phoneDb.add(new String[] {"p11", "OZ�ȴϾ�", "phone11.png"});
	phoneDb.add(new String[] {"p12", "������", "phone12.png"});
	phoneDb.add(new String[] {"p13", "T�ȴϾ�", "phone13.png"});
	phoneDb.add(new String[] {"p14", "T�ȴϾ�2", "phone14.png"});
	phoneDb.add(new String[] {"p15", "��Ʈ��", "phone15.png"});
	phoneDb.add(new String[] {"p16", "��Ʈ�� ����Ʈ U", "phone16.png"});
	phoneDb.add(new String[] {"p17", "���̺�2", "phone17.png"});
	phoneDb.add(new String[] {"p18", "���̺��", "phone18.png"});
	phoneDb.add(new String[] {"p19", "���̺�� ����Ʈ", "phone19.png"});
	phoneDb.add(new String[] {"p20", "ȯ����", "phone20.png"});
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