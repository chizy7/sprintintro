// Group 2 member names: Jennifer and Chizaram 

function setup() {
  createCanvas(600, 500); // Sizes the canvas, making width = 600 and height = 500
  noStroke(); // Setting to draw our shapes without outlines
}

function draw() {
  background(220); // Paints the canvas a nice, neutral grey
  // Shows mouse position, just to be helpful.
  fill(0, 0, 0) // Change color to black for text
  text(`x: ${round(mouseX)}, y: ${round(mouseY)}`, 10, 10) 
  
  // Yellow-ish circle code
  fill(251, 255, 5)
  //rect(0, 0, 300, 250)
  triangle(100, 250, 250, 170, 330, 300)
  
  // Red-ish circle code
  // fill(207, 8, 38)
  // rect(300, 0, 300, 250)

  // Blueish circle code
  // fill(0, 190, 240)
  // rect(0, 250, 300, 250)

  // Green-ish circle code 
  // fill(50, 150, 100)
  // rect(300, 250, 300, 250)

}

