// 해당 div가 overflow 속성이 있을경우 안에 있는 요소들이 원래 지정한 높이값보다 높아지면 스크롤을 가장 아래로 땡김 
function scrollToBottom(div) {
    div.scrollTo(0, div.scrollHeight);
}

function itemListOpen() {
    $('.items').toggle(300);
}

function zoomClick() {
	$('#zoom').hide(0);
    $('#zoom > img').hide(0);
}

// 시스템에 찍힐때 대사 닉네임 이미지 다 없애는 함수
function clean() {
    document.querySelector("#systemZoomTextBox").textContent = "";
    document.querySelector("#char_Nick").innerHTML = "";
    const profile = document.querySelector("#char_Image");
    profile.style.backgroundImage = '';
}


