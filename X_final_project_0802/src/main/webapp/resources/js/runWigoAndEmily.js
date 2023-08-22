const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");    


class Sprite {
  constructor({position,velocity,image}){
    this.position = position;
    this.image = image;
  }

  draw(){
    context.drawImage(this.image,this.position.x, this.position.y);
  }
}
const rightPlayerImage = [
   	"/resources/img/game/myke/right0.png",
    "/resources/img/game/myke/right1.png",
    "/resources/img/game/myke/right2.png",
    "/resources/img/game/myke/right3.png",
    "/resources/img/game/myke/right4.png"
];    
    
const leftPlayerImage = [
	"/resources/img/game/myke/left0.png",
	"/resources/img/game/myke/left1.png",
	"/resources/img/game/myke/left2.png",
	"/resources/img/game/myke/left3.png",
	"/resources/img/game/myke/left4.png"
];              

const prontPlayerImage = [
	"/resources/img/game/myke/pront0.png",
	"/resources/img/game/myke/pront1.png",
	"/resources/img/game/myke/pront2.png",
	"/resources/img/game/myke/pront3.png",
	"/resources/img/game/myke/pront4.png"
]

const bgImg = new Image();
bgImg.src = "/resources/map/testBack.png";

const playerImage = new Image();
playerImage.src = "/resources/img/game/myke/pront0.png";

const background = new Sprite({
  position:{
    x: -70,
    y: -120
  },
  image: bgImg
});




let playerImageIndex = 0;
let imageChangeDelay = 0;

const enemyImage = new Image();
enemyImage.src = "/resources/img/alex.png";
// max Height : -1022 , max width : 920
const player = { x: 70, y: 120, speed: 10, width: 36, height: 36 };
let enemy = { x: 3000, y: 120, speed: 15, width: 40, height: 40 };


function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  let bgX = background.position.x;
  let bgY = background.position.y;
  
  // 배경 그리기
  background.draw();
  // 플레이어 그리기
  context.drawImage(playerImage, player.x, player.y, player.width, player.height);
  
  // 적 그리기
  // context.drawImage(enemyImage, enemy.x, enemy.y, enemy.width, enemy.height);
  
  // 플레이어 움직임 처리
  // 위
  if (keys.ArrowUp && player.y > 0 && background.position.y < 0) {
    console.log("bgX :" , background.position.x , "bgY :" , background.position.y);
    console.log("playerX : " , player.x , "playerY : " ,player.y);

    if(background.position.y <= -1020) background.position.y += 10;
    
    player.y -= player.speed;
    if (imageChangeDelay == 0) {
        imageChangeDelay = 7;
        playerImageIndex = (playerImageIndex + 1) % prontPlayerImage.length;
        playerImage.src = prontPlayerImage[playerImageIndex];
    }
  } else if (keys.ArrowUp && player.y <= 0 && background.position.y < 0) {
    console.log("bgX :" , background.position.x , "bgY :" , background.position.y);
    console.log("playerX : " , player.x , "playerY : " ,player.y);

    if (imageChangeDelay == 0) {
        imageChangeDelay = 7;
        playerImageIndex = (playerImageIndex + 1) % prontPlayerImage.length;
        playerImage.src = prontPlayerImage[playerImageIndex];
    }
    background.position.y = background.position.y + player.speed;
  }

  // 아래
  if (keys.ArrowDown && player.y + player.height < canvas.height && background.position.y > -1020 && background.position.y <= 0) {
      console.log("bgX :" , background.position.x , "bgY :" , background.position.y);
      console.log("playerX : " , player.x , "playerY : " ,player.y);

      if(background.position.y >= 0) background.position.y -= 10;
     
      player.y += player.speed;
      if(imageChangeDelay == 0) {
          imageChangeDelay = 7;  
          playerImageIndex = (playerImageIndex + 1) % prontPlayerImage.length;  
          playerImage.src = prontPlayerImage[playerImageIndex];
      }
  }else if(keys.ArrowDown && player.y + player.height >= canvas.height && background.position.y > -1020 ) {
      console.log("bgX :" , background.position.x , "bgY :" , background.position.y);
      console.log("playerX : " , player.x , "playerY : " ,player.y);

      if(imageChangeDelay == 0) {
          imageChangeDelay = 7;  
          playerImageIndex = (playerImageIndex + 1) % prontPlayerImage.length;  
          playerImage.src = prontPlayerImage[playerImageIndex];
      }
      background.position.y = background.position.y - player.speed;
  }



  // 오른쪽
  if (keys.ArrowRight && player.x + player.width < canvas.width && background.position.x > -1920 && background.position.x <= 100) {
      console.log("bgX :" , background.position.x , "bgY :" , background.position.y); 
      console.log("playerX : " , player.x , "playerY : " ,player.y);

      player.x += player.speed;
      if(background.position.x >= 0) background.position.x -= 2;

      if (imageChangeDelay == 0) {
          imageChangeDelay = 7;  
          playerImageIndex = (playerImageIndex + 1) % rightPlayerImage.length;  
          playerImage.src = rightPlayerImage[playerImageIndex];
      }
  }else if(keys.ArrowRight && player.x + player.width >= canvas.width && background.position.x > -1920){
    console.log("bgX :" , background.position.x , "bgY :" , background.position.y);
    console.log("playerX : " , player.x , "playerY : " ,player.y);
    
    if (imageChangeDelay == 0) {
      imageChangeDelay = 7;  
      playerImageIndex = (playerImageIndex + 1) % rightPlayerImage.length;  
      playerImage.src = rightPlayerImage[playerImageIndex];
    }
    background.position.x = background.position.x - player.speed;
  }

  // 왼쪽
  if (keys.ArrowLeft && player.x > 0 && background.position.x < 0) {
    console.log("bgX :" , background.position.x , "bgY :" , background.position.y); 
    console.log("playerX : " , player.x , "playerY : " ,player.y);

    player.x -= player.speed;
	  if(background.position.x <= -1920) background.position.x += 2; 
	  if (imageChangeDelay == 0) {
	      imageChangeDelay = 7;  
	      playerImageIndex = (playerImageIndex + 1) % leftPlayerImage.length;  
	      playerImage.src = leftPlayerImage[playerImageIndex];
	  }

  }else if(keys.ArrowLeft && player.x <= 0 && background.position.x < 0){
    console.log("bgX :" , background.position.x , "bgY :" , background.position.y); 
    console.log("playerX : " , player.x , "playerY : " ,player.y);

    if (imageChangeDelay == 0) {
      imageChangeDelay = 7;  
      playerImageIndex = (playerImageIndex + 1) % leftPlayerImage.length;  
      playerImage.src = leftPlayerImage[playerImageIndex];
    }

    background.position.x = background.position.x + player.speed;
  }
  
  // 적 위치를 캔버스 안에 유지
  /*
  enemy.x = Math.max(0, Math.min(canvas.width - enemy.width, enemy.x));
  enemy.y = Math.max(0, Math.min(canvas.height - enemy.height, enemy.y));
  */

  if(imageChangeDelay > 0){
	  imageChangeDelay--;
  }
  
  // 충돌 감지
  if (checkCollision(player, enemy)) {
    gameOver();
    return;
  }
  
  // 게임 루프 반복
  requestAnimationFrame(gameLoop);
}

// 충돌 감지 함수
function checkCollision(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj1.height > obj2.y
  );
}

// 게임 오버 처리
function gameOver() {
	// 일단 임시용
  	context.font = "30px Arial";
  	context.fillStyle = "black";
  	context.fillText("Game Over", canvas.width / 2 - 70, canvas.height / 2);
}

// 키 입력 상태 저장
const keys = {};

window.addEventListener("keydown", (event) => {
  	keys[event.key] = true;
});

window.addEventListener("keyup", (event) => {
  	keys[event.key] = false;
});

// 게임 시작
gameLoop();

/*
setInterval(updateEnemyMovement, 200);

function updateEnemyMovement() {
  const randomDirection = Math.floor(Math.random() * 4);
  switch (randomDirection) {
    case 0: // 상
      if (enemy.y > 0) {
        enemy.y -= enemy.speed;
      }
      break;
    case 1: // 하
      if (enemy.y + enemy.height < canvas.height) {
        enemy.y += enemy.speed;
      }
      break;
    case 2: // 좌
      if (enemy.x > 0) {
        enemy.x -= enemy.speed;
      }
      break;
    case 3: // 우
      if (enemy.x + enemy.width < canvas.width) {
        enemy.x += enemy.speed;
      }
      break;
  }
}
*/
