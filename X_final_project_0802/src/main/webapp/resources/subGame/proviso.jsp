<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/proviso.css" />
<section>
	<div id="provisoBox">
		<div id="provisoIntro">단서들끼리 조합해보자</div>
		<div id="itemUseFailed">이게 맞을까 ? 다시해보자</div>
		<div id="p_itemBox">
			<div id="p_item1" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 'p_item1')">
				<img src="" alt="" id="p_item1_img" />
			</div>
			<div id="p_item2" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 'p_item2')">
				<img src="" alt="" id="p_item2_img" />
			</div>
			<div id="keyAndBox" onclick='p_click("keyAndBox");'>
				상자를 열었더니 무슨 서류가 나왔다.
			</div>
			<div id="lampAndPaper" onclick='flashlightStart();'>
				램프로 종이를 비춰보니 무슨 글자들이 보인다.
			</div>
		</div>
		<div id="p_btnBox">
			<div id="useBtn" onclick="itemUse();">USE</div>
		</div>
	</div>
	<div id="flashLightBox">
	<div id="flashlight"></div>
		사랑하는 모든 이에게,
		<br/><br/>
		나는 이 편지를 남기고 떠날 것이라는 것을 미리 알려드립니다. 
		<br/><br/>
		내가 하는 말은 나를 이해해줄 수 있는 사람들에게만 들려주고 싶은 말입니다.
		<br/><br/>
		나는 보석 컬렉션 관리자로서 박물관에서의 시간을 보냈고, 보석이 사라진 사건에 연루되어 있다는 소문을 들었습니다. 
		<br/><br/>
		나는 자신의 위치와 보석 컬렉션을 지키는 역할을 강조해왔습니다. 
		<br/><br/>
		그런데 이번 사건은 나의 역할을 의미 없게 만들었습니다. 보석이 사라진 것은 나의 책임입니다.
		<br/><br/>
		나는 자신의 능력을 과시하고자 보석을 훔치게 되었습니다.
		<br/><br/>
		그리고 그것이 이루어진 순간, 나는 이 사건에 대한 엄청난 후회와 불안을 느꼈습니다. 
		<br/><br/>
		이 모든 것은 욕심과 자만에 뿌리를 두고 있었고, 나는 이제 그 후회와 책임을 지기 위해 이 편지를 남깁니다.
		<br/><br/>
		나는 이 사건으로 인해 박물관의 소중한 유물을 훔치는 범죄자로까지 추락했습니다. 하지만 이 행동이 옳은 것은 아닙니다.
		<br/><br/>
		나는 이 편지를 통해 나의 행동에 대한 사과와 후회의 말을 전하고 싶습니다. 
		<br/><br/>
		이제는 모든 것이 이미 늦었지만, 적어도 솔직한 마음으로 사과하며 떠나고자 합니다.
		<br/><br/>
		에밀리 루이스
	</div>
</section>