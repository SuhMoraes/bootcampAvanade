let canvas = document.getElementById("snake")
let context = canvas.getContext("2d");
/*Tamanho da box */
let box = 32;

 /* criando a cobrinha - seu tamanho*/
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

/* Criando as direções dos movimentos*/
let direction = "right";



function criarBG(){
  context.fillStyle ="#74c69d";
  context.fillRect(0, 0, 16 * box, 16 * box); //Desenha o local onde acontece o jogo
}
function criarCobrinha(){
  for(i=0; i < snake.length; i++) {
    context.fillStyle = "#081c15";
    context.fillRect(snake[i].x, snake[i].y, box, box)
  }
}

/* */
function iniciarJogo(){
  criarBG();
  criarCobrinha();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(direction == 'right') snakeX += box;
  if(direction == 'left') snakeX -= box;
  if(direction == 'up') snakeY -= box;
  if(direction == 'down') snakeY += box;

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);