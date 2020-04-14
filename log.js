class log {

    constructor(x,y,height,angle){
        var options={
    restitution:1,
    friction:1,
    density:1
    
        }
    this.body=Bodies.rectangle(x,y,20,height,angle,options);
    Matter.Body.setAngle(this.body,angle);//it is syntax
    
    World.add(world,this.body);
    
    }
    display(){
     var ang=this.body.angle   
    push ();
    translate(this.body.position.x,this.body.position.y);
    rotate (ang);//at what angle it will rotate deprnds on body
    fill ("brown");
    rectMode(CENTER);
    rect(0,0,this.body.position.x,this.body.position.y);
    pop ();
    
    
    
    }
    
    
    
    }