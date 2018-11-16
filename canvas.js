var canvas = document.querySelector('canvas')
  ;
canvas.width = window.innerWidth; // setting full width
canvas.height = window.innerHeight; // setting full height

var c = canvas.getContext('2d'); // "magic paintbrush"

c.fillStyle = 'rgba(255, 0, 0, 0.5)'; // color and opacity; this formating needs to be above the shape
c.fillRect(100, 100, 100, 100); // Rectangle Shape: coordinates from top lhs of screen: (x, y, width, height)

c.fillStyle = 'rgba(255, 0, 0, 0.2)'; // color and opacity; this formating needs to be above the shape
c.fillRect(500, 500, 100, 100); // Rectangle Shape: coordinates from top lhs of screen: (x, y, width, height)
console.log(canvas);

// Line
c.beginPath();
c.moveTo(200, 400); // (x, y) line start
c.lineTo(400, 100); // (x, y) line end
c.lineTo(800, 400); // line 2
c.strokeStyle = "#FA00A0"; // color
c.stroke();

// Animated square - dealing with X coordinates
var distance = 3; // In 1 second, i'mma move 10px
var squarexpos = 0; // x position of square
function moverhs() {
  c.clearRect(squarexpos-distance, 700, 100, 100) // "eraser tool"
  c.fillStyle = 'rgba(0, 255, 0, 0.8)';
  c.fillRect(squarexpos, 700, 100, 100);
  if(squarexpos > canvas.width){ // if the square is off the canvas
    squarexpos = -100 // hiding to the LHS of the screen; at 0 it's the start of X
  }
  else{
    squarexpos = squarexpos+distance
  }
  window.requestAnimationFrame(moverhs) // "i'mma keep drawing"
}
moverhs()


// Animated bouncy square - dealing with Y coordinates
var speed = 4; // how fast i'm going
var verticalspeed = speed;
var squareypos = 0;
function bounce() {
  c.clearRect(400, squareypos-verticalspeed, 100, 100) // "eraser tool"
  c.fillStyle = 'rgba(0, 100, 100, 0.8)';
  c.fillRect(400, squareypos, 100, 100); // editing the y coordinate
  if(squareypos > canvas.height-100){ // canvas minus the shape height
    verticalspeed = speed*-1
  }
  if(squareypos < 0){
    verticalspeed = speed
  }
  squareypos = squareypos+verticalspeed
  window.requestAnimationFrame(bounce)
}
bounce()
