class Ball{
    constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:1,
        friction:0,
        density:0.9
    }
    
    this.radius = radius;

    this.x=x
    this.y=y
    
   this.body = Bodies.circle(x,y,radius/2,options);

    World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(255,0,255);
        ellipse(0,0,this.radius, this.radius);
        pop();
      }
}