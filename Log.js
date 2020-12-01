class Log{
    constructor(x,y,h,angle){
        var boptions = {
            restitution:0.7,
            density:2.5
        }
        this.w=20;
        this.h=h;
       this.body=Bodies.rectangle(x,y,20,h,boptions);
       Matter.Body.setAngle(this.body,angle)
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        fill("brown")
        strokeWeight(4)
        stroke ("purple")
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop();
    }
}        
      

    
