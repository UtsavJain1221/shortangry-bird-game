class bird{
    constructor(){
   var options={
   'restitution':1,
   'density':1,
   'friction':1
   
   }
   
   this.body=Bodies.rectangle(100,200,20,20,options);
   World.add(world,this.body);
    }
   display(){
       var ang= this.body.angle;
       this.body.position.x=World.mouseX;
       this.body.position.y=World.mouseY;
   push ();
   translate(this.body.position.x,this.body.position.y);
   rotate (ang);
   fill ("red");
   rectMode(CENTER);
   rect(0,0,20,20);
   pop ();
   
   
   
   }
   
   
   
   }