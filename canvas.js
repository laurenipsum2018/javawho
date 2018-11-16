var canvas = document.querySelector('canvas')
  ;
canvas.width = window.innerWidth; // setting full width / height
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); // "magic paintbrush"

c.fillRect(100, 100, 100, 100); // Rectangle Shape: coordinates from top lhs of screen: (x, y, width, height)
console.log(canvas);

// Line
c.beginPath();
c.moveTo(200, 400); // (x, y) line start
c.lineTo(400, 100); // (x, y) line end
c.lineTo(800, 400); // line 2
c.stroke();
