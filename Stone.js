class Stone{
    constructor(x, y, width){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,

        }
        this.body = Bodies.circle(x, y, width, options);
        this.width = 33;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    var angle = this.body.position;
    fill("white");
    rotate(angle);
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 33, 54);
  }
}
