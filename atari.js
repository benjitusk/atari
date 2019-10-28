let totalBricks = 5;
let bricksA = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < totalBricks; i ++) {
    bricksA.push(new Brick(i));
  }
  
}

function draw() {
  background(0);
  for (let brick of bricksA) {
    brick.show();
  }
}
