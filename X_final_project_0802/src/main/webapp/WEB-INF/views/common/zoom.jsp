<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!-- start zoom box  -->
  	<div id="zoom" onclick="zoomClick()">
        <div id="keybox">
              <img id="key" src="/resources/subGame/image/key.png"/>
              <div id="keyText">어떤 상자를 열수있는 열쇠같다.</div>
		</div>
		<div id="boxBox">
			<img id="box" src="/resources/subGame/image/box.png">
			<div id="boxText">무슨 상자 처럼 보인다. <br/>열쇠를 통해 열수 있을거 같다.</div>
		</div>
		<div id="paperBox">
			<img id="paper" src="/resources/subGame/image/paper.png" />
			<div id="paperText">조금 낡은 종이같다.<br/>눈으로 보기엔 아무것도 보이지 않는다.<br/>
				만져보면 무언가 적혀있는거 같긴한데..
			</div>
		</div>
		<div id="lampBox">
			<img id="lamp" src="/resources/subGame/image/lamp.png" />
			<div id="lampText">램프다. 무언갈 비쳐볼수 있을거 같다.</div>
		</div>
		<div id="letterBox">
			<img id="letter" src="/resources/subGame/image/letter.png" />
			<div id="letterText">편지다. <br/>보아하니 그렇게 오래된거 같진 않다.</div>
			<button id="letterBtn" onclick="openLetter();"> 열어볼까 ? </button>
		</div>
		<div id="docBox">
			<img id="doc" src="/resources/subGame/image/doc.png"/>
			<div id="docText">상자를 열었더니 나온 서류이다.</div>
			<button id="docBtn" onclick="openDoc();"> 열어볼까 ? </button>
		</div>
	</div>
<!-- end zoom box  -->