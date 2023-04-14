
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

//2 Se crea un variante Angle (Angulo) y se establece un valor aleatorio entre 0 y 60
var angle =60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   var ground1 

   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  // 1 Agregar el objeto rectangle a world
  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
 
  //3 Rotar el objeto dentro la funcion draw () 
  Matter.Body.rotate(ground1,angle)
 
 //5 Girar el suelo
 //push sirve para capturar la nueva informacion
 //pop sirve para volver ala configuracion anterior
 
 push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20,)
  pop()

  //4 Aumenta el ángulo de rotacionen 0.1 grados
  angle +=0,1;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  