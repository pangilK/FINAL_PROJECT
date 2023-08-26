// const canvas = document.getElementById("gameCanvas");
// const context = canvas.getContext("2d");
const canvasWidth = 960; // 캔버스 너비
const canvasHeight = 512; // 캔버스 높이


class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image;
  }

  draw() {
    context.drawImage(this.image, this.position.x, this.position.y);
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

const backPlayerImage = [
  "/resources/img/game/myke/back0.png",
  "/resources/img/game/myke/back1.png",
  "/resources/img/game/myke/back2.png",
  "/resources/img/game/myke/back3.png",
  "/resources/img/game/myke/back4.png"
]

const collisionObjects = collisionData.objects.map((obj) => ({
  x: obj.x,
  y: obj.y,
  width: obj.width,
  height: obj.height,
}));


const bgImg = new Image();
bgImg.src = "/resources/map/testBack.png";

const playerImage = new Image();
playerImage.src = "/resources/img/game/myke/pront0.png";

const background = new Sprite({
  position: {
    x: 90,
    y: -120
  },
  image: bgImg
});

let playerImageIndex = 0;
let imageChangeDelay = 0;

const enemyImage = new Image();
enemyImage.src = "/resources/img/alex.png";
const player = { x: canvasWidth/2, y: canvasHeight/2, speed: 10, width: 48, height: 48 };
let enemy = { x: 3000, y: 120, speed: 15, width: 40, height: 40 };


function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  // 배경 그리기
  background.draw();

  // 플레이어 그리기
  context.drawImage(playerImage , player.x , player.y , player.width , player.height);

  // 플레이어 움직임 처리
  
  // 오른쪽
  if (keys.ArrowRight) {
    const isCol = checkCollision(player, collisionObjects,'right');
    if (!isCol) background.position.x = background.position.x - player.speed;
    imageChange(rightPlayerImage);
  }
  
  // 왼쪽
  if (keys.ArrowLeft) {
    const isCol = checkCollision(player, collisionObjects,'left');
    if (!isCol) background.position.x = background.position.x + player.speed;
    imageChange(leftPlayerImage);
  }

  // 위
  if (keys.ArrowUp) {
    const isCol = checkCollision(player, collisionObjects,'up');
    if (!isCol) background.position.y = background.position.y + player.speed;
    imageChange(backPlayerImage);
  }

  // 아래
  if (keys.ArrowDown) {
    const isCol = checkCollision(player, collisionObjects,'down');
    if (!isCol) background.position.y = background.position.y - player.speed;
    imageChange(prontPlayerImage);
  }

  if (imageChangeDelay > 0) {
    imageChangeDelay--;
  } 
  
  if (checkCollision(player, collisionObjects)) {
    console.log("충돌");
  }
  
  // 게임 루프 반복
  requestAnimationFrame(gameLoop);
}


// 충돌 감지 함수
function checkCollision(player, obstacles , arrow) {
  for (let obj of obstacles) {
    let objX = obj.x * 3 + background.position.x;
    let objY = obj.y * 3 + background.position.y;
    switch(arrow){
      case "left" : objX += player.speed; break;
      case "right" : objX -= player.speed; break;
      case "up" : objY += player.speed; break;
      case "down" : objY -= player.speed; break;
    }
    if (
      player.x < objX + obj.width * 3 &&
      player.x + player.width > objX &&
      player.y < objY + obj.height * 3 &&
      player.y + player.height > objY
    ) {
      return true; // 충돌이 발생했음을 반환
    }
  }
  return false; // 충돌이 발생하지 않음을 반환
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
  const arrowKeys = [37, 38, 39, 40];
  if (arrowKeys.includes(event.keyCode)) {
    event.preventDefault();
  }
  keys[event.key] = true;
});

window.addEventListener("keyup", (event) => {
  keys[event.key] = false;
});

function imageChange(playerImageArray) {
  if (imageChangeDelay == 0) {
      imageChangeDelay = 7;
      playerImageIndex = (playerImageIndex + 1) % playerImageArray.length;
      playerImage.src = playerImageArray[playerImageIndex];
  }
}

// 게임시작
// gameLoop();
