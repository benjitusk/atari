let totalBricks = 15;
let bricksA = [];
let ball;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < totalBricks; i++) {
        bricksA.push(new Brick(i));
    }
    
   ball = new Ball();

}

function draw() {
    background(0);
    let padSize = 70;
    
    ball.show();
    for (let brick of bricksA) {
        brick.show();
    }
    
    stroke(255);
    strokeWeight(10);
    line(mouseX - padSize, height * 11 / 12, mouseX + padSize, height * 11 / 12);
}
