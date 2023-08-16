<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<jsp:include page="./common/header.jsp" />
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<body>
	<form action="game/start" method="post">
		<!-- <input type="hidden" value="${MemberVO.id}" /> -->
		<button type="submit">GAME START</button>
	</form>
	<%-- <jsp:include page="/resources/subGame/find.jsp"></jsp:include> --%>
</body>
<jsp:include page="./common/footer.jsp" />
