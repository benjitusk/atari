class Ball {

    constructor(x_) {
        this.x = x_ * 45;
        this.y = 30;
        this.damage = 0;
        this.c = color(255, random(170), random(170));
    
    }

    show() {
        fill(this.c);
        noStroke();
        rect(this.x, this.y, 40, 30, 7);
    }

    update() {
        
    }

} 
