<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
	window.onload = () => {
		let start = {
			type  : "GET",
			async : false ,
			url : "chat",
			data : {
				propmt : "당신은 나에게 옵션(A, B, C, D)을 제공하는 텍스트 기반 비디오 게임입니다. 셜록홈즈가 배경이야 플레이타임은 30분정도로 생각하고 한글로 만들어줘 처음에는 무조건 A,B,C,D의 선택지를 줘야해";
			},
			dataType : "json",
			success : (data) =>{
				console.log(data);
			},
			error : function(res){
				console.log(res);
			}
		}
	};
</script>
</head>
<body>

</body>
</html>