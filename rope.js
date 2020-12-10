class Rope{
    constructor(body1,body2,offsetX,offsetY){
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    var options = {
        bodyA: body1,
        bodyB: body2,
        pointB:{x:this.offsetX ,y:this.offsetY}
       }
       this.rope = Matter.Constraint.create(options);
       World.add(world.this.body);

    }

    display(){
    var point1 = this.rope.bodyA.position;
    var point2 = this.rope.bodyB.position;

    strokeWeight(2);

    var Anchor1X = point1.x;
    var Anchor1Y = point1.y;

    var Anchor2X = point2.x + this.offsetX;
    var Anchor2Y = point2.y + this.offsetY;

    Line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    }
}