<%@ page contentType="application/x-json;charset=euc-kr" %>
<%@ page import="java.io.*,org.json.*, java.util.*" %>

<%!
int maxId = 4;
%>

<%
request.setCharacterEncoding("euc-kr");
String action = request.getParameter("action");
%>

<%if(action.equals("list")) {
	List<String[]> phoneDb = (List<String[]>) session.getAttribute("phoneDb");
	if(phoneDb == null) {
		phoneDb = new ArrayList<String[]>();
		phoneDb.add(new String[] {"1", "갤럭시 A", "phone01.png"});
		phoneDb.add(new String[] {"2", "갤럭시 에이스", "phone02.png"});
		phoneDb.add(new String[] {"3", "갤럭시 지오", "phone03.png"});
		phoneDb.add(new String[] {"4", "갤럭시 호핀", "phone04.png"});
		session.setAttribute("phoneDb", phoneDb);
	}%>
	[
	<%for(String[] phone : phoneDb) {%>
		{ 
			"id": <%=phone[0]%>, 
			"pname": "<%=phone[1]%>", 
			"pimage": "<%=phone[2]%>" 
		},
	<%}%>
	]
<%}%>

<%if(action.equals("create")) {
	List<String[]> phoneDb = (List<String[]>) session.getAttribute("phoneDb");
	BufferedReader reader = request.getReader();
	String json = "";
	String	strLine = null;
	while(true) {
		strLine = reader.readLine();
		if(strLine == null) break;
		json += strLine;
	}
	if(json.trim().startsWith("{")) {
		JSONObject jsonObject = new JSONObject(json);
		String[] phone = {
			String.valueOf(++maxId),
			jsonObject.getString("pname"),
			jsonObject.getString("pimage")
		};		
		phoneDb.add(phone);
	} else if(json.trim().startsWith("[")) {
		JSONArray jsonArray = new JSONArray(json);
		for(int i=0; i<jsonArray.length(); i++) {
			JSONObject jsonObject = jsonArray.getJSONObject(i);
			String[] phone = {
				String.valueOf(++maxId),
				jsonObject.getString("pname"),
				jsonObject.getString("pimage")
			};		
			phoneDb.add(phone);
		}
	}
  }%>

<%if(action.equals("update")) {
	List<String[]> phoneDb = (List<String[]>) session.getAttribute("phoneDb");
	BufferedReader reader = request.getReader();
	String json = "";
	String	strLine = null;
	while(true) {
		strLine = reader.readLine();
		if(strLine == null) break;
		json += strLine;
	}
	if(json.trim().startsWith("{")) {
		JSONObject jsonObject = new JSONObject(json);
		int id = jsonObject.getInt("id");
		String[] phone = null;
		for(String[] p : phoneDb) {
			if(p[0].equals(String.valueOf(id))) {
				p[1] = jsonObject.getString("pname");
				p[2] = jsonObject.getString("pimage");
				phone = p;
				break;
			}
		}
	} else if(json.trim().startsWith("[")) {
		JSONArray jsonArray = new JSONArray(json);
		for(int i=0; i<jsonArray.length(); i++) {
			JSONObject jsonObject = jsonArray.getJSONObject(i);
			int id = jsonObject.getInt("id");
			String[] phone = null;
			for(String[] p : phoneDb) {
				if(p[0].equals(String.valueOf(id))) {
					p[1] = jsonObject.getString("pname");
					p[2] = jsonObject.getString("pimage");
					phone = p;
					break;
				}
			}
		}
	}
  }%>

<%if(action.equals("destroy")) {
	List<String[]> phoneDb = (List<String[]>) session.getAttribute("phoneDb");
	BufferedReader reader = request.getReader();
	String json = "";
	String	strLine = null;
	while(true) {
		strLine = reader.readLine();
		if(strLine == null) break;
		json += strLine;
	}
	if(json.trim().startsWith("{")) {
		JSONObject jsonObject = new JSONObject(json);
		int id = jsonObject.getInt("id");
		for(String[] p : phoneDb) {
			if(p[0].equals(String.valueOf(id))) {
				phoneDb.remove(p);
				break;
			}
		}
	} else if(json.trim().startsWith("[")) {
		JSONArray jsonArray = new JSONArray(json);
		for(int i=0; i<jsonArray.length(); i++) {
			JSONObject jsonObject = jsonArray.getJSONObject(i);
			int id = jsonObject.getInt("id");
			for(String[] p : phoneDb) {
				if(p[0].equals(String.valueOf(id))) {
					phoneDb.remove(p);
					break;
				}
			}
		}
	}
  }%>
