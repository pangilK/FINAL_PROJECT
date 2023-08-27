<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/find_emily.css">
<section>
        <article id="screen">
            <div id="hinter" onclick="hindel();">
                1. 너무 빠르게 클릭하면 인식이 잘 안됩니다<br><br>
                2. 이미지를 클릭하여 단서를 찾으시면됩니다.<br><br>
            </div>
            
            <div id="back">
                <img class="clicker" id="smallPaper" src="/resources/subGame/image/paper.png" onclick="paper();">
            </div>

            <div class="speech" id="spc01" onclick="clr1();">
                <h1>에밀리의 사무실</h1>
                <p>단서를 찾아보자</p>
            </div>
       		<div class="speech" id="spc02" onclick="clr1();">
       			<h1>서랍 안</h1>
       			<p>어떤 종이를 발견했다. </p>
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
