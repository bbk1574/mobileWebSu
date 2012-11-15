<%@ page contentType="text/javascript;charset=utf-8" %>

<%String serverKey = request.getParameter("serverKey");%>

<%if(serverKey != null) {%>
		<%=serverKey%>(
			{
				"name": "phonelist",
				"data": [
					{ 
						"pno": "p1", 
						"pname": "갤럭시 A", 
						"pimage": "phone01.png" 
					},
					
					{ 
						"pno": "p2", 
						"pname": "갤럭시 에이스", 
						"pimage": "phone02.png" 
					},
					
					{ 
						"pno": "p3", 
						"pname": "갤럭시 지오", 
						"pimage": "phone03.png" 
					},
					
					{ 
						"pno": "p4", 
						"pname": "갤럭시 호핀", 
						"pimage": "phone04.png" 
					}
				]
			}
		);
<%}%>
