const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground;
var box1, box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup() {
  createCanvas(1000,500);
 engine=Engine.create();
 world=engine.world;

 box1=new Box(700,450,70,70);
 box2 = new Box(900,450,70,70);
 pig1=new Pig(800,450);
 log1=new Log(800,380,270,PI/2)
 box3=new Box(700,350,70,70);
 box4 = new Box(900,350,70,70);
 pig2=new Pig(800,350);
 log2=new Log(800,280,270,PI/2)
 box5=new Box(800,250,70,70)
 log3=new Log(770,250,150,PI/7)
 log4=new Log(830,250,150,-PI/7)
 ground=new Ground(500,480,1000,20)
 bird=new Bird(500,250)
}
function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  ground.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  box5.display();
  bird.display();
}