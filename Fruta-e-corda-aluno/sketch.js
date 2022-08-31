const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//adicionar restrição em uma const


var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
function preload(){
  backgroundImg = loadImage("background.png");
  fruit = loadImage("melon.png");
  basket = loadImage("basket.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 

  //Desafio1:
  

  //Desafio2
  //criar suporte/corda para da bola

}
function draw() {
  background(backgroundImg); 
 
  ground.display();
  
  //definir tamanho para basket/cesta


  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);
  image(g,450,270)

  //mostrar suporte/slingshot na tela

}

//função para quando arrastarmos a ball com o mouse
function mouseDragged(){
  Matter.Body.setPosition();
}

//chamar //função para quando soltarmos o mouse
function mouseReleased(){
 
}
