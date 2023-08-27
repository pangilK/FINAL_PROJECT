
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

function clean() {
    document.querySelector("#systemZoomTextBox").textContent = "";
    document.querySelector("#char_Nick").innerHTML = "";
    const profile = document.querySelector("#char_Image");
    profile.style.backgroundImage = '';
}



