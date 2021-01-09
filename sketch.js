
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var box2;
var box3;
var trash;
var render

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new dustbin(697,610,20,120);
	box2=new dustbin(397,610,20,120);
	box3=new dustbin(543,660,290,20);
    trash=new paper(58,648,40);

	Engine.run(engine);

	
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  fill("white");
  stroke("white");
  text(mouseX+","+mouseY,mouseX,mouseY);
  box1.display();
  box2.display();
  box3.display();
  trash.display();
  drawSprites();
  keyPressed(); 
} 
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(trash.body,trash.body.position,{x:85,y:-85});
	}
}


