var fuzzyBubbles; // name of font 
var song;
let button;
let snowflakes = []; // array to hold snowflake objects
var slider; 


function setup() { 
  createCanvas(600, 500); 
  noStroke(); 
  mySound = createAudio('sound/lost_in_paradise.mp3')
  //song.setVolume(0.5);
  slider = createSlider(0, 1, 0.5, 0.01); 
  slider.position(298, 300);
  slider.style('width', '80px');
  button = createButton('Play');
  button.position(318, 275);
  button.mousePressed(mySound);
}

function draw() {
  background(170, 212, 138); 
  text(`x: ${round(mouseX)}, y: ${round(mouseY)}`, 10, 10)

  // Screen border
  fill(86, 92, 94)
  rect(125, 100, 350, 225)
  // Screen
  fill(25, 78, 125)
  rect(135, 110, 330, 205)
  // Screen neck
  fill(77, 77, 77)
  rect(285, 325, 30, 30)
  // Screen neck bottom
  fill(86, 92, 94)
  rect(247.5, 355, 105, 15)

  // Table top
  fill(143, 114, 93) 
  rect(75, 370, 450, 20)
   // Table top (lower)
  fill(122, 97, 78)
  rect(115, 390, 370, 25) 
  // Table leg (left)
  fill(122, 97, 78)
  rect(95, 390, 20, 110) 
  // Table leg (right)
  fill(122, 97, 78)
  rect(485, 390, 20, 110) 

  // Align text
  textSize(18);
  textAlign(CENTER);
  fill(0,0252550, 0); // green
  stroke(27, 63, 110); // blue outline 
  strokeWeight(2);
  textFont(fuzzyBubbles);
  text("cout << \"Play some music!\" << endl;", 300, 210);
  //drawWords(width * 0.25);

  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

}

function preload(){
  fuzzyBubbles = loadFont('FuzzyBubbles-Bold.ttf');
}

function mousePressed() {
  mySound.play();
}

// snowflake class
function snowflake() {
  fill(252, 255, 253)
  noStroke();
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}