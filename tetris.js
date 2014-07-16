function loopTick() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  pieces.forEach(function(piece) {
    piece.draw(piece.x, piece.y);
  });
}

function startLoop() {
  requestAnimationFrame(function() {
    loopTick();
    startLoop();
  });
}

function drawDot(x, y, color) {
  var c = document.getElementById("canvas");
  var COUNT_X = 15;
  var COUNT_Y = 20;
  var HEIGHT = c.height / COUNT_Y;
  var WIDTH = c.width / COUNT_X;
  var ctx = c.getContext("2d");

  ctx.fillStyle = color;
  ctx.fillRect(x * WIDTH, y * HEIGHT, WIDTH-1, HEIGHT-1);
}

function init() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  c.setAttribute('width', c.getBoundingClientRect().width);
  c.setAttribute('height', c.getBoundingClientRect().height);
}

function drawSquare(x, y) {
  drawDot(x, y, "#FF0000");
  drawDot(x+1, y, "#FF0000");
  drawDot(x, y+1, "#FF0000");
  drawDot(x+1, y+1, "#FF0000");
}

function drawLine(x, y) {
  drawDot(x, y, "#00FF00");
  drawDot(x, y+1, "#00FF00");
  drawDot(x, y+2, "#00FF00");
  drawDot(x, y+3, "#00FF00");
}

function Square() {
  this.x = Math.floor(Math.random() * 14); // 14 because its width 2
  this.y = 0;
  this.draw = drawSquare;
}

function Line() {
  this.x = Math.floor(Math.random() * 15);
  this.y = 0;
  this.draw = drawLine;
}

/*
function RightLeg() {
  this.x = Math.floor(Math.random() * 14);
  this.y = 0;
  this.draw = drawLine;
}

function RightLeg() {
  this.x = Math.floor(Math.random() * 14);
  this.y = 0;
  this.draw = drawLine;
}

function LeftLightning() {
  this.x = Math.floor(Math.random() * 15);
  this.y = 0;
  this.draw = drawLine;
}

function RightLightning() {
  this.x = Math.floor(Math.random() * 15);
  this.y = 0;
  this.draw = drawLine;
}
*/

var pieces = [];

function main() {
  init();
  startLoop();

  pieces.push(new Square());

  //drawSquare(2, 5);
  /*
  drawDot(7, 5, "#00FF00");
  drawDot(7, 6, "#00FF00");
  drawDot(7, 7, "#00FF00");
  drawDot(7, 8, "#00FF00");

  drawDot(10, 15, "#0000FF");
  drawDot(9, 16, "#0000FF");
  drawDot(10, 16, "#0000FF");
  drawDot(11, 16, "#0000FF");
  */
}

document.addEventListener('DOMContentLoaded', function(e) {
  main();
});

document.addEventListener('keydown', function(e) {
  console.log(e.keyCode);
  switch(e.keyCode) {
    case 37: { // left
      pieces[0].x--;
      break;
    }
    case 38: { // up
      pieces[0].y--;
      break;
    }
    case 39: { // right
      pieces[0].x++;
      break;
    }
    case 40: { // down
      pieces[0].y++;
      break;
    }
    default: {
      break;
    }
  }
});
