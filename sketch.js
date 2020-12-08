
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof11,roof12,roof13,roof14,roof15;
var chain1,chain2,chain3,chain4,chain5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	//Create the Bodies Here.
	//bob1 = new Bob(340,300,40);
	//bob2 = new Bob(420,300,40);
	//bob3 = new Bob(500,300,40);
	//bob4 = new Bob(580,300,40);
	//bob5 = new Bob(660,300,40);
	roof1 = new Roof(width/2,height/4,width/2,20)
	//roof12 = new roof1(width/2,200,width,20)
	//roof13 = new roof1(width/2,200,width,20)
	//roof14 = new roof1(width/2,200,width,20)
	//roof15 = new roof1(width/2,200,width,20)
	
	chain1=new Chain(bob1.body,roof1.body,-bobDiameter*2, 0)

	chain2=new Chain(bob2.body,roof1.body,-bobDiameter*1, 0)
	chain3=new Chain(bob3.body,roof1.body,0, 0)
	chain4=new Chain(bob4.body,roof1.body,bobDiameter*1, 0)
	chain5=new Chain(bob5.body,roof1.body,bobDiameter*2, 0)
	
	//chain1 = new Chain(roof11.body,bob1.body,-160,0);
	//chain2 = new Chain(roof11.body,bob2.body,-80,0);
	//chain3 = new Chain(roof11.body,bob3.body,0,0);
	//chain4 = new Chain(roof11.body,bob4.body,80,0);
	//chain5 = new Chain(roof11.body,bob5.body,160,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  //roof12.display();
  //roof13.display();
  //roof14.display();
  //roof15.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}	

