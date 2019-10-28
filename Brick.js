class Brick {

  constructor(x_) {
  this.x = x_ *20;
  this.y = 30;
  this.damage = 0;
  }
  
  show() {
    rect(this.x, this.y, 20, 20, 20);
  }
  
  update() {
  
  }

}
