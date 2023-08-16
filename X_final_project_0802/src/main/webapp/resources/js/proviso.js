let sucLampAndPaper = false;
let	sucKeyAndBox = false;

function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event, targetId) {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("text/plain");
    const src1 = document.getElementById("p_item1_img").src;
    const src2 = document.getElementById("p_item2_img").src;
    const target = document.getElementById(targetId).src;

    if (target != '') {
        document.getElementById(targetId+'_img').src = '';
    }
    
    if(targetId == "p_item1") {
        if(itemId == src2) {
            if(src2 != ''){
                document.getElementById("p_item2_img").src = src1;
            }else{
                document.getElementById("p_item2_img").src = '';
            }
        }
    }else if(targetId == "p_item2") {
        if(itemId == src1) {
            if(src1 != ''){
                document.getElementById("p_item1_img").src = src2;
            }else{
                document.getElementById("p_item1_img").src = '';
            }
        }
    }
    document.getElementById(targetId+'_img').src = itemId;
}

function itemUse() {
    const src1 = document.getElementById("p_item1_img").src;
    const src2 = document.getElementById("p_item2_img").src;

    const isPaperAndLamp = (src1.endsWith("paper.png") && src2.endsWith("lamp.png")) ||
                            (src1.endsWith("lamp.png") && src2.endsWith("paper.png"));
    
    const isBoxAndKey = (src1.endsWith("key.png") && src2.endsWith("box.png")) ||
                        (src1.endsWith("box.png") && src2.endsWith("key.png"));

    if(isBoxAndKey){
    	document.getElementById("p_item1_img").src = '';
    	document.getElementById("p_item2_img").src = '';
      	document.querySelector('#inv6').style.width = '105px';
        $('#keyAndBox').fadeToggle(200);
    }

    if(isPaperAndLamp){
    	document.getElementById("p_item1_img").src = '';
    	document.getElementById("p_item2_img").src = '';
        $('#lampAndPaper').fadeToggle(200);
    }
    
    if(!isPaperAndLamp && !isBoxAndKey){
        itemUseFailed();
        setTimeout(() => {
        	
            document.getElementById("itemUseFailed").style.display = "none";
            
            setTimeout(() => {
                document.getElementById("p_item1_img").src = '';
                document.getElementById("p_item2_img").src = '';
            },90);

        }, 2000);
    }
}

function itemUseFailed() {
    $('#itemUseFailed').fadeToggle(200);
}

function p_click(divId) {
	document.querySelector('#'+divId).style.display = 'none';
}

function flashlightStart() {
    document.querySelector("#provisoBox").style.display = 'none';
    document.querySelector("#flashLightBox").style.display = 'flex';
    flashlight();
}

function flashlight(){
    let mouseX = 0;
    let mouseY = 0;
    let flashlight = document.getElementById("flashlight");
    
    const isTouchDevice = () => {
        try {
          document.createEvent("TouchEvent");
          return true;
        } catch (e) {
          return false;
        }
    };

    document.getElementById("flashLightBox").addEventListener('mouseenter', function() {
        document.addEventListener('mousemove',getMousePosition);
    });
    
    document.getElementById("flashLightBox").addEventListener('mouseleave', function() {
        document.removeEventListener('mousemove',getMousePosition);
    });
    
    function getMousePosition(e) {
       mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
  	   mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
       console.log(mouseX);
       console.log(mouseY);
       flashlight.style.setProperty("--Xpos", mouseX-270 + "px");
       flashlight.style.setProperty("--Ypos", mouseY-100 + "px");
    }	
}
