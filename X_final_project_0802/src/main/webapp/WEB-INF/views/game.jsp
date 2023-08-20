<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<style>
	#gameCanvas{
		border : 1px solid black;
		margin:auto;
	}
</style>
</head>
<body>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
    <script>
    const canvas = document.getElementById("gameCanvas");
    const context = canvas.getContext("2d");

    const playerImage = new Image();
    // 임시이미지임 픽셀아트로 그려서넣을꺼임
    playerImage.src = "/resources/img/mike.png";

    const enemyImage = new Image();
    // 임시이미지임 픽셀아트로 그려서넣을꺼임
    enemyImage.src = "/resources/img/alex.png";
    
    const player = { x: 50, y: 50, speed: 3, width: 40, height: 40 };
    let enemy = { x: 700, y: 500, speed: 1, width: 40, height: 40 };

    function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // 플레이어 그리기
      context.drawImage(playerImage, player.x, player.y, player.width, player.height);
      
      // 적 그리기
      context.drawImage(enemyImage, enemy.x, enemy.y, enemy.width, enemy.height);
      
      // 플레이어 움직임 처리
      if (keys.ArrowLeft && player.x > 0) {
	    player.x -= player.speed;
	  }
	  if (keys.ArrowRight && player.x + player.width < canvas.width) {
	    player.x += player.speed;
	  }
	  if (keys.ArrowUp && player.y > 0) {
	    player.y -= player.speed;
	  }
	  if (keys.ArrowDown && player.y + player.height < canvas.height) {
	    player.y += player.speed;
	  }
      	
	  // 적의 랜덤 움직임 처리(ㅈㄴ이상함)
	  enemy.x += enemy.speed * (Math.random() > 0.5 ? 1 : -1);
	  enemy.y += enemy.speed * (Math.random() > 0.5 ? 1 : -1);

	  // 적의 위치를 캔버스 안에 유지
	  enemy.x = Math.max(0, Math.min(canvas.width - enemy.width, enemy.x));
	  enemy.y = Math.max(0, Math.min(canvas.height - enemy.height, enemy.y));
	  
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
    </script>
</body>
</html>
