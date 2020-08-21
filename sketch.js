var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var bobDiameter
var roof

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;
bobDiameter=40

	//Create the Bodies Here.

roofObject=new Roof(220,290,200,20);

bobObject1=new Ball(240,220,bobDiameter);
bobObject2=new Ball(240,210,bobDiameter);
bobObject3=new Ball(240,210,bobDiameter);
bobObject4=new Ball(240,210,bobDiameter);
bobObject5=new Ball(240,210,bobDiameter);

rope1=new Rope(bobObject1.body,roofObject.body,bobDiameter*2,0);
rope2=new Rope(bobObject2.body,roofObject.body,bobDiameter*2,0);
rope3=new Rope(bobObject3.body,roofObject.body,bobDiameter*2,0);
rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*2,0);
rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0);






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}







