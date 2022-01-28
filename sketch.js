const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground,left,right,top_wall;

var ball;

var btn1;


function setup(){

  createCanvas(1500,740);
  engine = Engine.create();
  
  world = engine.world;

  btn1 = createImg("right.png");
  btn1.position(200,30);
  btn1.size(50,50);
  btn1.mouseClicked(hforce);

  btn2 = createImg("up.png");
  btn2.position(30,30);
  btn2.size(50,50);
  btn2.mouseClicked(hforce);



  ground = new Ground (600,490,1380,20);
  left = new  Ground (10,200,20,1900)
  right = new Ground(1490,300,20,900),
  top_wall = new Ground(800,10,1800,20);

  obs1 = new Ground(800,490,20,300);
  obs2 = new Ground(800,10,20,300);
  obs3 = new Ground(1000,5,20,350);
  obs4 = new Ground(1000,455,20,240);
  obs5 = new Ground(1300,495,20,250);
  obs6 = new Ground(930,730,1900,20);
  obs7 = new Ground(130,690,20,60);
  
  var ball_options = {
    restitution: 0.65
  }

  ball = new Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() {

  background("red");
  Engine.update(engine);

  ground.show();
  left.show();
  right.show();
  top_wall.show();

  obs1.show();
  obs2.show();
  obs3.show();
  obs4.show();
  obs5.show();
  obs6.show();
  obs7.show();
 
  ellipse(ball.position.x,ball.position.y,20);

}

function hforce(){
  
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

}

function vforce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

}



