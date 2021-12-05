function setup() {
  createCanvas(600, 500); 
  noStroke(); 
}

function draw() {
  background(220);
  text(`x: ${round(mouseX)}, y: ${round(mouseY)}`, 10, 10) 
}
