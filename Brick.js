class Brick {

    constructor(x_) {
        this.x = (x_ + 0.5) * 55;
        this.y = 30;
        this.damage = 0;
        this.c = color(255, random(170), random(170));
    
    }

    show() {
        fill(this.c);
        noStroke();
        rect(this.x, this.y, 50, 30, 7);
    }

    update() {
        
    }

} 
