class Ground 
{
  constructor(x, y, w, h) 
  {
    
    let options = {
      isStatic:true
    };
    
    this.angle=60
    
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x,y, this.w, this.h, options);
    
   
    World.add(world, this.body);

    }
show(){

  Matter.Body.rotate(this.body,angle)
  push()
  rectMode(CENTER);
  storke(255);
  fill(127);
  
  translate(this.body.position.x,this.body.position.y);
 rotate(angle);
 rect(0,0,this.w,this.h);
 angle +=0.1;
  
 
  
  pop()
  
}
    }
    

  

 
   

