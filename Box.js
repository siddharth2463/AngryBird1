class Box{
    constructor(x,y,w,h){
        var boptions = {
            restitution:0.2,
            density:1,friction:1
        }
        this.w= w;
        this.h=h;
       this.body=Bodies.rectangle(x,y,w,h,boptions);
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        fill("white")
        strokeWeight(4)
        stroke ("green")
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop();
    }
}        
      

    
