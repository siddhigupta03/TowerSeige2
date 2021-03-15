class Box extends BaseClass{
  constructor(x, y) {
    super(x,y,40,60);
    this.visiblity = 255;
  }
  display(){
    if(this.body.speed < 3) {
      super.display();
    } else {
      World.remove(world, this.body);
    }
  }
};