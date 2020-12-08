class Bob{
    constructor(x,y,r){
        var ballOptions = {
           isStatic: false,
           restitution: 1, 
           friction: 0,
           density: 0.8
        }
        
    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,ballOptions);
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        //translate(pos.x,pos.y);
        fill("pink");
        imageMode(CENTER);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop()
    }
}