var canvas = document.querySelector('canvas')
  ;
canvas.width = window.innerWidth; // setting full width / height
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); // "magic paintbrush"

c.fillRect(100, 100, 100, 100); // x and y (SHAPES: coordinates from top lhs of screen: x, y, width, height)
console.log(canvas);
