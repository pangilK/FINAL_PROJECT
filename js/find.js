
function bup() {
    if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 2) {
        $('#space1').animate({
            width: 0
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h1();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 22 && $('#space2').width() >= 18) {
        $('#space1').animate({
            width: 20
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h1();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 42 && $('#space2').width() >= 38) {
        $('#space1').animate({
            width: 40
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h1();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h2();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 22 && $('#space3').width() >= 18) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 20
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h2();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 42 && $('#space3').width() >= 38) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 40
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h2();
    } else return;
}

function bdown() {
    if ($('#space1').width() <= 2 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h2();
    } else if ($('#space1').width() <= 22 && $('#space1').width() >= 18 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 20
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h2();
    } else if ($('#space1').width() <= 42 && $('#space1').width() >= 38 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 40
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h2();
    } else if ($('#space1').width() >= 58 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h3();
    } else if ($('#space1').width() >= 58 && $('#space2').width() <= 22 && $('#space2').width() >= 18 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 20
        }, 0);
        h3();
    } else if ($('#space1').width() >= 58 && $('#space2').width() <= 42 && $('#space2').width() >= 38 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 40
        }, 0);
        h3();
    } else return;
}

function bleft() {
    if ($('#space1').width() <= 22 && $('#space1').width() >= 18 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 0
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v1();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 22 && $('#space2').width() >= 18 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v1();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 22 && $('#space3').width() >= 18) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v1();
    } else if ($('#space1').width() <= 42 && $('#space1').width() >= 38 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 20
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v2();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 42 && $('#space2').width() >= 38 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 20
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v2();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 42 && $('#space3').width() >= 38) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 20
        }, 0);
        v2();
    } else return;
}

function bright() {
    if ($('#space1').width() <= 2 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 20
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v2();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 20
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v2();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 20
        }, 0);
        v2();
    } else if ($('#space1').width() <= 22 && $('#space1').width() >= 18 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 40
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v3();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 22 && $('#space2').width() >= 18 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 40
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v3();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 22 && $('#space3').width() >= 18) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 40
        }, 0);
        v3();
    } else return;
}

function v1() {
    $('#back').animate({
        marginLeft: 0
    }, 500);
}

function v2() {
    $('#back').animate({
        marginLeft: -535
    }, 500);
}

function v3() {
    $('#back').animate({
        marginLeft: -1070
    }, 500);
}

function h1() {
    $('#back').animate({
        marginTop: 0
    }, 500);
}

function h2() {
    $('#back').animate({
        marginTop: -330
    }, 500);
}

function h3() {
    $('#back').animate({
        marginTop: -660
    }, 500);
}

function box() {
    $('#smallBox').hide();
    $('#box').show();
    $('#keybox').hide();
    $('.speech').hide(0);
    $('#spc03').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#boxBox').show(0);
    $('#inv2').animate({
        width: 105
    }, 0);
}

function boxItem() {
    $('#smallBox').hide();
    $('#box').show();
    $('#keybox').hide();
    $('.speech').hide(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#boxBox').show(0);
    if($('#inv1').width() > 1){
        ending1();
    }
}

function key() {
    $('#smallKey').hide();
    $('#boxBox').hide();
    $('.speech').hide(0);
    $('#spc02').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#keybox').show(0);
    invopen();
    $('#inv1').animate({
        width: 105
    }, 0);
}

function keyItem() {
    $('#smallKey').hide();
    $('#boxBox').hide();
    $('.speech').hide(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#keybox').show(0);
    invopen();
    if($('#inv2').width() > 1){
        ending1();
    }
}

function hint() {
    $('#hinter').toggle(300);
}

function hindel() {
    $('#hinter').hide(300);
}

function clr1() {
    $('.speech').hide(0);
}
