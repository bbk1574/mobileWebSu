<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<meta name="viewport" content="width=device-width, initial-scale=1.0,
			 maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>jquery mobile</title>
<link rel="shortcut icon" href="../image/icon.png">
<link rel="apple-touch-icon" href="../image/icon.png">

<link rel="stylesheet" type="text/css" href="../lib/jquery.mobile-1.1.0.css">
<script type="text/javascript" src="../lib/jquery-1.7.1.js"></script>
<script type="text/javascript" src="../lib/jquery.mobile-1.1.0.js"></script>
</head>
<body>
	<div data-role="page">
		<div data-role="header" data-position="fixed">
			<h1>Header</h1>
		</div>
		<div data-role="content">
			<% for(int i = 1; i <=100; i++){ %>
				content <%=i %> <br/>
			<% } %>
		</div>
		<div data-role="footer" data-position="fixed">
			<h1>Footer content</h1>
		<div>
	</div>
</body>
</html>