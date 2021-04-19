let canvas = document.getElementById("snake")
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

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
criarBG();
criarCobrinha();