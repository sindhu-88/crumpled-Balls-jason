
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperimg;


function setup() {
	createCanvas(1250, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin=new Dustbin();
  ground = new Ground (400, 615, 800, 20 );
  paperObject = new Paper (200,450, 30);

  Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background("white");
 
  ground.display ();
  dustbin.display();
  paperObject.display ();
  drawSprites();

  
}

function keyPressed () {
	if (keyCode=== UP_ARROW) {
    Matter.Body.applyForce (paperObject.body, paperObject.body.position,{x:5,y:-5});
    
}
	}




