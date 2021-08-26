const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
var engine, world;

function preload(){

}

function setup() {
  var canvas = createCanvas(1800,1400);
  engine = Engine.create();
  world = engine.world;
 

 

  snowbg = new Snowbg();
  snow = new Snow();
}

function draw() {
  
  Engine.update(engine);

  background("black");  
 
  snowbg.display();
  snow.display();

  drawSprites();
}