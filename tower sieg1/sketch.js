const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Constraint = Matter.Constraint;

var block1,block2,block3 ,block4 ,slingshot;



function setup() {
	createCanvas(1200, 700);

	

	engine = Engine.create();
  world = engine.world;
  
  ground1= new Ground(340,500,220,15);
  ground2= new Ground(1000,300,220,15);

  //first layer
  block1 = new Box(260,470,30,40);
  block2 = new Box(300,470,30,40);
  block3 = new Box(340,470,30,40);
  block4 = new Box(380,470,30,40);
  block5 = new Box(420,470,30,40);

  // second layer
  block6 = new Box(400,425,30,40);
  block7 = new Box(360,425,30,40);
  block8 = new Box(320,425,30,40);
  block9 = new Box(280,425,30,40);

  //third layer
  block10 = new Box(380,380,30,40);
  block11 = new Box(340,380,30,40);
  block12 = new Box(300,380,30,40);

  //fourth layer
  block13 = new Box(360,335,30,40);
  block14 = new Box(320,335,30,40);

  // first layer 2

  block15 = new Box(1090,270,30,40);
  block16 = new Box(1050,270,30,40);
  block17 = new Box(1010,270,30,40);
  block18 = new Box(970,270,30,40);
  block19 = new Box(930,270,30,40);

  // second layer 2

  block20 = new Box(950,225,30,40);
  block21 = new Box(990,225,30,40);
  block22 = new Box(1030,225,30,40);
  block23 = new Box(1070,225,30,40);

  // third layer 2

  block24 = new Box(1050,180,30,40);
  block25 = new Box(1010,180,30,40);
  block26 = new Box(970,180,30,40);

  // fourth layer 2

  block27 = new Box(990,135,30,40);
  block28 = new Box(1030,135,30,40);

  ball = new Polygon();

// slingshot = new Sling( this.polygon,{x:100,y:200});



  
  


}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();

  //first layer
  ground1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

 // second layer
 block6.display();
 block7.display();
 block8.display();
 block9.display();

 //third layer 
 block10.display();
 block11.display();
 block12.display();

 //fourth layer
 block13.display();
 block14.display();
 ground2.display();

 //first layer 2
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();

//second layer 2

block20.display();
block21.display();
block22.display();
block23.display();

//third layer 2

block24.display();
block25.display();
block26.display();

//fourth layer 2

block27.display();
block28.display();

ball.display();

//slingshot.display();
  

 
}

function mouseDragged(){
    
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

  }



function mouseReleased(){
  slingshot.fly();

 
}

function mouseReleased(){
  slingshot.fly();

}





