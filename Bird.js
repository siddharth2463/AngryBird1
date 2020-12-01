class Bird{
    constructor(x,y){
        var boptions = {
            restitution:0.7,
            density:2.5
        }
        this.w= 50;
        this.h=50;
       this.body=Bodies.rectangle(x,y,50,50,boptions);
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        fill("yellow")
        strokeWeight(4)
        stroke ("white")
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop();
    }
}        
      

    
