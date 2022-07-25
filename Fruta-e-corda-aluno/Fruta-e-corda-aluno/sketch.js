const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//criar constraint

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
function preload(){
  backgroundImg = loadImage("background.png");
  fruit=loadImage("melon.png");
  g=loadImage("basket.png");

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 
  //Desafio1: criar o objeto bola
  ball = 
  World.add(world,ball);

//Desafio2
  slingShot = new Slingshot();

}
function draw() {
  background(backgroundImg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  g.scale=.025;


  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);
  image(g,450,270)

  //mostrar slingShot
  
}

//criar function mouseDragged


//criar function mouseReleased

