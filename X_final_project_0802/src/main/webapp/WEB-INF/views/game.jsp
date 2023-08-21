<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Museum Background with Three.js</title>
<style>
	#gameCanvas{
		border : 1px solid black;
		margin:auto;
		/* background:url('/resources/img/back5.png'); */
	}
</style>
</head>
<body>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
    <script>
    const canvas = document.getElementById("gameCanvas");
    const context = canvas.getContext("2d");    
   
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
    
    
    const playerImage = new Image();
    playerImage.src = "/resources/img/game/myke/pront0.png";
    let playerImageIndex = 0;
    let imageChangeDelay = 0;
    
    const enemyImage = new Image();
    enemyImage.src = "/resources/img/alex.png";
    
    const player = { x: 50, y: 50, speed: 2, width: 50, height: 50 };
    let enemy = { x: 700, y: 500, speed: 15, width: 40, height: 40 };

    function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // 플레이어 그리기
      context.drawImage(playerImage, player.x, player.y, player.width, player.height);
      
      // 적 그리기
      context.drawImage(enemyImage, enemy.x, enemy.y, enemy.width, enemy.height);
      
      // 플레이어 움직임 처리
      if (keys.ArrowLeft && player.x > 0) {
	      player.x -= player.speed;
    	  console.log(imageChangeDelay);
    	  if (imageChangeDelay == 0) {
    	      imageChangeDelay = 7;  
    	      playerImageIndex = (playerImageIndex + 1) % leftPlayerImage.length;  
    	      playerImage.src = leftPlayerImage[playerImageIndex];
    	  }
    	  
	    	/* playerImageIndex = (playerImageIndex + 1) % leftPlayerImage.length;  // 다음 이미지로 변경
	    	playerImage.src = leftPlayerImage[playerImageIndex]; */
	  }
	  if (keys.ArrowRight && player.x + player.width < canvas.width) {
	 
	    	player.x += player.speed;
	    	console.log(imageChangeDelay);
	    	if (imageChangeDelay == 0) {
	    	    imageChangeDelay = 7;  
	    	    playerImageIndex = (playerImageIndex + 1) % rightPlayerImage.length;  
	    	    playerImage.src = rightPlayerImage[playerImageIndex];
	        }
	    	
	  }
	  if (keys.ArrowUp && player.y > 0) {
	    	player.y -= player.speed;

	  }
	  
	  if (keys.ArrowDown && player.y + player.height < canvas.height) {
	    	player.y += player.speed;
	      	if (imageChangeDelay == 0) {
	    	    imageChangeDelay = 7;  
	    	    playerImageIndex = (playerImageIndex + 1) % prontPlayerImage.length;  
	    	    playerImage.src = prontPlayerImage[playerImageIndex];
	        }
	  }
	  
	  // 적 위치를 캔버스 안에 유지
	  enemy.x = Math.max(0, Math.min(canvas.width - enemy.width, enemy.x));
	  enemy.y = Math.max(0, Math.min(canvas.height - enemy.height, enemy.y));
	  
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
    </script>
</body>
</html>
