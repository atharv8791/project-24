
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper
var leftDust;
var bottomDust;
var rightDust;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   ground = new Ground(400,650,800,20);
   paper = new Paper(100,100,30);
   leftDust = new Dust(500,600,10,70);
   bottomDust = new Dust(550,630,80,10);
   rightDust = new Dust(600,600,10,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  leftDust.display();
  bottomDust.display();
  rightDust.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
    } 


