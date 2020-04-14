const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3,box4,box5;
var pig1,log1,log2,log3,log4;
var ground1;
var bird1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(280,360,50,50);
    box2= new Box(360,360,20,20);
    pig1= new pig(320,360,20,20);
    log1= new log(280,310,10,PI/1);
    box4=new Box(360,250,50,50);
log2=new log(280,240,10,PI/1);
log3=new log(280,230,10,PI/3);
log4=new log(320,230,10,PI/3);
    box3=new Box(280,250,50,50);
   ground1= new Ground(200,380,400,10);
bird1=new bird();
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   pig1.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   box3.display();
   ground1.display();
   box4.display();
   bird1.display();
}