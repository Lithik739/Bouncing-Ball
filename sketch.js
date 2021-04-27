const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var ball

var engine, world;
//var box;
var ground;




function setup(){
  var canvas=createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  //box = Bodies.rectangle(200,200,50,50);
  //World.add(world,box);
  var ball_Options={ 
    restitution : 1.0
  }

  
  ball=Bodies.circle(200,200,50,ball_Options)
  World.add(world,ball)

  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world, ground);
}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  //rect(box.position.x,box.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)
  
}
