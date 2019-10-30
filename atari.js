let totalBricks = 15;
let bricksA = [];
let ball;
let padSize = 70;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < totalBricks; i++) {
        bricksA.push(new Brick(i));
    }
    
   ball = new Ball();

}

function draw() {
    background(0);
    
    ballCheck();
    //ball.update();
    ball.show();
    for (let brick of bricksA) {
        brick.show();
    }
    
    stroke(255);
    strokeWeight(10);
    line(mouseX - padSize, height * 11 / 12, mouseX + padSize, height * 11 / 12);
}

function ballCheck() {
    if ((ball.y >= height * 11 / 12 && (ball.x <= mouseX + padSize && ball.x >= mouseX - padSize))) {
        // Ball hit paddle
    }
    
    for (let i = 0; i< bricksA.length; i++) {
        if (ball.x >= bricksA[i].x && ball.x <= bricksA[i].x + 50 && ball.y >= bricksA[i].y && ball.y <= bricksA[i].y + 30) {
            alert("Brick Hit!");
        }
  }
}
