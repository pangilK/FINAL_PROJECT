<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="path" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/start.css">
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<title>Insert title here</title>
<script  src="/resources/js/start.js"></script>
<script src="/resources/js/scene.js"></script>
<script src="/resources/js/find.js"></script>
<script src="/resources/js/proviso.js"></script>
<script src="/resources/js/util.js"></script>
</head>
<body>
	<audio src="/resources/sound/demo2_1.mp3" loop autoplay id="bgm"></audio>
	<div id="start_1">
		<h6 id="main">게임에 오신걸 환영합니다.</h6>
		<h6 id="typing"></h6>
		<h6 id="typing2"></h6>
		<input type="text" id="nickCheck" readonly/>
		<button id="checkBtn">시작</button>
	</div>
	<jsp:include page="./common/zoom.jsp" />
	<jsp:include page="./common/item.jsp" />
	<jsp:include page="./common/load.jsp" />	
	<div id="gameBox">
		<div id="textBox">
			<div id="systemText"></div> 
			<div id="gameBtn"></div>
			<!-- 캐릭터 프로필이미지 닉네임 , 대사 -->
			<div id="systemZoomBox">
				<div id="char_Profile">
					<div id="char_Image"></div>
					<div id="char_Nick"></div>
				</div>
				<div id="systemZoomTextBox">
				</div>
			</div>
		</div>
	</div>
	<!-- 서브게임을 나타내는 박스 -->
	<div id="subGameBox">
	</div>
</body>
<script src="/resources/js/nickcheck.js"></script>
<script src="/resources/js/game.js"></script>
</html>