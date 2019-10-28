class Ball {

    constructor() {
        this.x = width / 2;
        this.y = height * 11 / 12;
        this.dx = 0;
        this.dy = 0;
    
    }

    show() {
        fill(this.c);
        noStroke();
        ellipse(this.x, this.y, 14);
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
    }

} 
