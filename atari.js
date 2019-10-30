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
    
    ballCheck();
    ball.update();
    ball.show();
    for (let brick of bricksA) {
        brick.show();
    }
    
    stroke(255);
    strokeWeight(10);
    line(mouseX - padSize, height * 11 / 12, mouseX + padSize, height * 11 / 12);
}

function ballCheck() {
    // if ball is @ pad || if ball is at brick
        // bounce
    if ((ball.y >= height * 11 / 12 && (ball.x <= mouseX + padSize && ball.x >= mouseX - padSize)) {
        // Ball is @ pad
        alert("bounce");
    }
}
