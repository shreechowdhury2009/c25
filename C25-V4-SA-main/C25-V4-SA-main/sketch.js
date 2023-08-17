
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;

var fan,fan1,fan2,fan3,fan4


function setup() {
  createCanvas(400,400);

  

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 

  fan=new Ground(50,370,50,30);
  fan1=new Ground(50,350,50,30);
  fan2=new Ground(50,150,50,30);
  fan3=new Ground(50,3250,50,30);

 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}



function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 
  
 

  

fan.show()
fan1.show()
fan2.show()
fan3.show()

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
  Engine.update(engine);
 
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  