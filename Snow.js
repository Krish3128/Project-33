class Snow{
    
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic : false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 700, 100,50,50);
        pop();
      }
}