
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
var ground,paper,box,box2,box1







function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(750,650,1500,20);
	box= new Box(1400,595,20,90);
	box1= new Box(1240,595,20,90);
	box2= new Box(1320,630,140,20);
	paper= new Paper(100,100,30);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  ground.display();
  paper.display();
  box1.display();
  box.display();
  box2.display();
  drawSprites();
 
}



