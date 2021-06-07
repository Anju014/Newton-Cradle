
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint

var engine, world


function setup() {
	createCanvas(600, 500);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	bob1 = new Bob(200,400,25);
	bob2 = new Bob(250,400,25);
	bob3 = new Bob(300,400,25);
	bob4 = new Bob(350,400,25);
	bob5 = new Bob(400,400,25);

	rope1 = new Rope(bob1.body, {x:200, y:100});
	rope2 = new Rope(bob2.body, {x:250, y:100});
	rope3 = new Rope(bob3.body, {x:300, y:100});
	rope4 = new Rope(bob4.body, {x:350, y:100});
	rope5 = new Rope(bob5.body, {x:400, y:100});
 
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("lavender");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body, {x:mouseX, y:mouseY})
}



