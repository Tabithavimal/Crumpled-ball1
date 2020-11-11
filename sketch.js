
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbin;
var world;


function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);


	engine = Engine.create();
	world = engine.world;
	paperSprite=createSprite(200,645,30,30)
	paperSprite.shapeColor="red"


	dustbin1 =new Dustbin(390,610,20,100)
    dustbin2= new Dustbin(450,660,150,PI)
	dustbin3= new Dustbin(525,610,20,100)
	//Create the Bodies Here.
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	
 
 
  drawSprites();
  dustbin1.display();
dustbin2.display();
dustbin3.display();

}
function keyPreessed(){

	if( keyCode===UP_ARROW){
	
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	
	
	}
	
	
	
	
	
	 }
	 


