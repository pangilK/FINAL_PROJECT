<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/find.css">
<style>
	#back {
    	width: 2140px;
   		height: 1320px;
    	margin-left: -535px;
    	margin-top: -330px;
    	background: url('/resources/subGame/image/alex_office.jpg');
    	background-size : cover;
	}
</style>
<section>
        <article id="screen">
            <div id="hinter" onclick="hindel();">
                1. 너무 빠르게 클릭하면 인식이 잘 안됩니다<br><br>
                2. 이미지를 클릭하여 단서를 찾으시면됩니다.<br><br>
                3. 위에 X버튼을 통해 단서를 다 찾았는지 안찾았는지 알수있습니다.
            </div>
            <div id="closeTrue">
            	단서를 모두 다 찾았다 다시 돌아가자.
            	<button onclick="findEnd();">돌아간다</button>
            </div>
            <div id="closeFalse" onclick="falsedel();">
            	아직 찾아야 할 단서가 남았다. <br/> 계속 찾아보자.
            </div>
            <div id="close" onclick="XClick('alex');">
            </div>
            <div id="back">
                <img class="clicker" id="smallBox" src="/resources/subGame/image/box.png" onclick="box();">
                <img class="clicker" id="smallKey" src="/resources/subGame/image/key.png" onclick="key();">
            </div>
			
            <div class="speech" id="spc01" onclick="clr1();">
                <h1>알렉스의 사무실</h1>
                <p>단서를 찾아보자</p>
            </div>
       		<div class="speech" id="spcKey" onclick="clr1();">
       			<h1>책꽂이</h1>
       			<p> 어떤 열쇠를 발견했다. </p>
       		</div>
            <div class="speech" id="spcBox" onclick="clr1();">
                <h1>서랍</h1>
                <p>서랍을 열어보니 어느 상자를 발견 했다.</p>
            </div>
        </article>

        <article id="control">
            <div id="pad1">
                <div id="minimap">
                    <div id="space1"></div>
                    <div id="space2"></div>
                    <div id="space3"></div>
                    <div id="dot"></div>
                </div>
            </div>

            <div id="pad2">
                <img id="btu" src="https://raw.githubusercontent.com/Tir-na-nog/image/master/test-room/btu.png" width="54" height="60" onclick="bup();">
                <img id="btl" src="https://raw.githubusercontent.com/Tir-na-nog/image/master/test-room/btl.png" width="70" height="50" onclick="bleft();">
                <img id="btc" src="https://raw.githubusercontent.com/Tir-na-nog/image/master/test-room/btc.png" width="54" height="50">
                <img id="btr" src="https://raw.githubusercontent.com/Tir-na-nog/image/master/test-room/btr.png" width="70" height="50" onclick="bright();">
                <img id="btd" src="https://raw.githubusercontent.com/Tir-na-nog/image/master/test-room/btd.png" width="54" height="60" onclick="bdown();">
            </div>

            <div id="pad3">
                <button id="hint" onclick="hint();">RULE</button>
            </div>
        </article>
</section>
