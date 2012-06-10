<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    
<div id="phonesave" data-role="page">
	<div data-role="header" data-position="fixed">
		<h1>�� ���</h1>
		<a href="#" data-rel="back" data-icon="arrow-l">����</a>
	</div>
	<div data-role="content">
		<form id="phonesaveform" method="post" action="02_phonesave.jsp">
			<div data-role="fieldcontain">
				<label for="pname">��ǰ��:</label>
				<input id="pname" type="text" name="pname" value="������ S3" />
			</div>
			<div data-role="fieldcontain">
				<label for="pcomp">������:</label>
				<input id="pcomp" type="text" name="pcomp" value="�Ｚ" />
			</div>
			<div data-role="fieldcontain">
				<label for="pprice">��ǰ��:</label>
				<input id="pprice" type="number" name="pprice" value="300000" />
			</div>
			<div data-role="fieldcontain">
				<label for="pimage">�̹���:</label>
				<select id="pimage" name="pimage">
					<option selected="selected">phone05.png</option>
					<option >phone06.png</option>
					<option >phone07.png</option>
				</select>
				
			</div>
			<div data-role="fieldcontain">
				<fieldset data-role="controlgroup" data-type="horizontal">
					<legend>����:</legend>
					<label for="radio1">������</label>
					<input id="radio1" type="radio" name="pcolor" value="black" checked="checked" />
					<label for="radio2">�����</label>
					<input id="radio2" type="radio" name="pcolor" value="black" checked="checked" />
				</fieldset>	
			</div>
			
			<input type="submit" value="���" />
		</form>
	</div>
	<div data-role="footer" data-position="fixed">
		<div data-role="navbar">
			<ul>
				<li>
					<a href="#home" data-icon="home" data-transition="slide" data-direction="reverse">��Ȩ</a>
				</li>
			</ul>
		</div>
	</div>	
</div>