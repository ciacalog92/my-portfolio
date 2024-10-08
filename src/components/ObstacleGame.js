import React, { useEffect, useRef, useState } from 'react';

function ObstacleGame() {
  const canvasRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      canvas.width = isPortrait ? 360 : 800;
      canvas.height = isPortrait ? 640 : 400;
      return isPortrait;
    };

    const isPortrait = updateCanvasSize();

    const backgroundImage = new Image();
    backgroundImage.src = isPortrait
      ? require('../images/sfondoVerticale.png') // 1080x1920
      : require('../images/sfondogioco.png'); // 800x400

    const jumpSound = new Audio(require('../audio/jump.mp3'));
    const collisionSound = new Audio(require('../audio/collision.mp3'));

    const playerImage = new Image();
    playerImage.src = require('../images/player.png');

    const player = {
      x: 50,
      y: canvas.height - 150,
      width: isPortrait ? 50 : 80,
      height: isPortrait ? 70 : 100,
      velocityY: 0,
      gravity: 0.8,
      jumpPower: -15,
      isJumping: false,
      update() {
        this.y += this.velocityY;
        this.velocityY += this.gravity;
        if (this.y > canvas.height - this.height - 10) {
          this.y = canvas.height - this.height - 10;
          this.isJumping = false;
        }
      },
      jump() {
        if (!this.isJumping) {
          this.isJumping = true;
          this.velocityY = this.jumpPower;
          jumpSound.play();
        }
      },
      draw() {
        ctx.drawImage(playerImage, this.x, this.y, this.width, this.height);
      }
    };

    const obstacleImage = new Image();
    obstacleImage.src = require('../images/obstacle.png');

    let obstacles = [];
    const obstacleWidth = isPortrait ? 30 : 40;
    const obstacleHeight = isPortrait ? 40 : 60;
    let obstacleSpeed = isPortrait ? 3 : 5;

    function generateObstacle() {
      obstacles.push({
        x: canvas.width,
        y: canvas.height - obstacleHeight,
        width: obstacleWidth,
        height: obstacleHeight
      });
    }

    function updateObstacles() {
      for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];
        obstacle.x -= obstacleSpeed;

        if (obstacle.x + obstacle.width < 0) {
          obstacles.splice(i, 1);
          incrementScore();
          i--;
        } else if (
          player.x < obstacle.x + obstacle.width &&
          player.x + player.width > obstacle.x &&
          player.y < obstacle.y + obstacle.height &&
          player.y + player.height > obstacle.y
        ) {
          collisionSound.play();
          gameOver();
          return;
        }
      }
    }

    function drawObstacles() {
      obstacles.forEach(obstacle => {
        ctx.drawImage(obstacleImage, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      });
    }

    let score = 0;
    let highScore = localStorage.getItem('highScore') || 0;
    document.getElementById('highScore').innerText = 'Punteggio massimo: ' + highScore;

    function incrementScore() {
      score += 1;
      document.getElementById('score').innerText = 'Punteggio: ' + score;

      if (score % 5 === 0) {
        obstacleSpeed += 1;
      }
    }

    function updateHighScore() {
      if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        document.getElementById('highScore').innerText = 'Punteggio massimo: ' + highScore;
      }
    }

    function handleTouchStart() {
      player.jump();
    }

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        player.jump();
      }
    });

    canvas.addEventListener('touchstart', handleTouchStart);

    function resizeCanvas() {
      const isPortrait = updateCanvasSize();
      player.width = isPortrait ? 50 : 80;
      player.height = isPortrait ? 70 : 100;
      backgroundImage.src = isPortrait
        ? require('../images/sfondoVerticale.png')
        : require('../images/sfondogioco.png');
    }

    window.addEventListener('resize', resizeCanvas);

    let gameInterval;
    let obstacleInterval;

    function startGame() {
      gameInterval = setInterval(gameLoop, 1000 / 60);
      obstacleInterval = setInterval(generateObstacle, 2000);
    }

    function gameOver() {
      clearInterval(gameInterval);
      clearInterval(obstacleInterval);
      updateHighScore();
      alert('Hai perso! Punteggio: ' + score);
      resetGame();
    }

    function resetGame() {
      score = 0;
      obstacleSpeed = isPortrait ? 3 : 5;
      obstacles = [];
      player.y = canvas.height - player.height - 10;
      player.velocityY = 0;
      document.getElementById('score').innerText = 'Punteggio: ' + score;
      startGame();
    }

    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

      player.update();
      player.draw();

      updateObstacles();
      drawObstacles();
    }

    startGame();

    return () => {
      clearInterval(gameInterval);
      clearInterval(obstacleInterval);
      window.removeEventListener('keydown', handleTouchStart);
      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  function toggleFullscreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    } else {
      // Enter fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Safari
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
      setIsFullscreen(true);
    }
  }
  

  return (
    <>
      <h2>Gioco a Ostacoli</h2>
      <canvas ref={canvasRef}></canvas>
      <p id="score">Punteggio: 0</p>
      <p id="highScore">Punteggio massimo: 0</p>
      <button onClick={toggleFullscreen}>
        {isFullscreen ? 'Esci dalla modalità schermo intero' : 'Vai a schermo intero'}
      </button>
    </>
  );
}

export default ObstacleGame;
