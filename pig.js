class pig {

    constructor(x,y){
     var option={
    'friction':1,
    'density':2
    
     }
    
        this.body=Bodies.rectangle(x,y,30,30,option);
        World.add(world,this.body);
    
    }
    display(){
    var ang=this.body.angle;
    push ();
    translate(this.body.position.x,this.body.position.y);
    rotate (ang);
    fill ("green");
    rectMode(CENTER);
    rect(0,0,this.body.width,this.body.height);
    
    pop ();
    
    
    }
    
    }