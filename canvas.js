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

// Animated square

var distance = 1; // In 1 second, i'mma move 10px
var squarexpos = 0; // x position of square
function draw() {
  c.clearRect(squarexpos-distance, 700, 100, 100) // "eraser tool"
  c.fillStyle = 'rgba(0, 255, 0, 0.8)';
  c.fillRect(squarexpos, 700, 100, 100);
  if(squarexpos > canvas.width){ // if the square is off the canvas
    squarexpos = 0 // put it back at the start
  }
  else{
    squarexpos = squarexpos+distance // defining the movement
  }
  window.requestAnimationFrame(draw) // "i'mma keep drawing"
}
draw()
