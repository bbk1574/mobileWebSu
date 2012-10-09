<%@ page contentType="application/x-json;charset=euc-kr" %>
<%@page import="org.json.JSONObject"%>
<%@page import="java.io.BufferedReader"%>

<%
	request.setCharacterEncoding("euc-kr");
	String action = request.getParameter("action");
	
	if(action.equals("create")){
		BufferedReader reader = request.getReader();
		String json = "";
		String strLine = null;
		while(true){
			strLine = reader.readLine();
			if (strLine == null)break;
			json += strLine;
		}
		JSONObject jsonPhone = new JSONObject(json);
		String[] phone = {
				jsonPhone.getString("pno"),
				jsonPhone.getString("pname"),
				jsonPhone.getString("pimage")
		};
		for (int i =0; i<phone.length; i++){
			System.out.println(i + "번째 값: " + phone[i]);
		}
		session.setAttribute("phone", phone);
%>
		{ "result": "success"}
<%
	}
	
	if(action.equals("read")){
		String pno = request.getParameter("pno");
		String[] phone = (String[]) session.getAttribute("phone");
		for (int i =0; i<phone.length; i++){
			System.out.println(i + "번째 값: " + phone[i]);
		}
		if(phone != null && pno.equals(phone[0])){
%>
			{
				"result": "success",
				"pno": "<%=phone[0]%>",
				"pname": "<%=phone[1]%>",
				"pimage": "<%=phone[2]%>"
			}
<%
		} else {
%>
			{ "result": "failure" }
<%
		}
	}
	
	if(action.equals("update")){
		String[] phone = (String[]) session.getAttribute("phone");
		if(phone != null){
			BufferedReader reader = request.getReader();
			String json = "";
			String strLine = null;
			while(true){
				strLine = reader.readLine();
				if(strLine == null) break;
				json += strLine;
			}
			JSONObject jsonPhone = new JSONObject(json);
			phone[0] = jsonPhone.getString("pno");
			phone[1] = jsonPhone.getString("pname");
			phone[2] = jsonPhone.getString("pimage");
%>
			{ "result": "success" }
<%
		} else {
%>
			{ "result": "failure" }
<%
		}
	}
	
	if(action.equals("destroy")){
		String[] phone = (String[]) session.getAttribute("phone");
		if(phone != null){
			BufferedReader reader = request.getReader();
			String json = "";
			String strLine = null;
			while(true){
				strLine = reader.readLine();
				if(strLine == null) break;
				json += strLine;
			}
			JSONObject jsonPhone = new JSONObject(json);
			String deletePno = jsonPhone.getString("pno");
			if(deletePno.equals(phone[0])){
				session.removeAttribute("phone");
			}
%>
			{ "result": "success" }
<%
		} else {
%>
			{ "result": "failure" }
<%
		}
	}
%>