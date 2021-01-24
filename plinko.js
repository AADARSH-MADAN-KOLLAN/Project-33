class Plinko{
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution : 1
        }
        this.x = x;
        this.y = y;
        this.r = 6;
        this.body = Matter.Bodies.circle(x, y, 10, options);
        Matter.World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("cyan");
        noStroke();
        ellipse(pos.x, pos.y, this.r, this.r);
      }
}