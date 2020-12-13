
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeimg, tree;
var ground;
var stoneimg, stone;
var boyimg, boy;
var mangoimg, mango1, mango2, mango3, mango4, mango5;
var mango6, mango7, mango8, mango9, mango10;
var mango11, mango12, mango13, mango14, mango15;
var mango16, mango17, mango18, mango19, mango20;
var mango21, mango22, mango23, mango24, mango25;
var mango26, mango27, mango28, mango29, mango30;
var elasticline;

function preload()
{
    treeimg = loadImage("tree.png");
    stoneimg = loadImage("stone.png");
    boyimg = loadImage("boy.png");
    mangoimg = loadImage("mango.png");
}

function setup() {
	createCanvas(1280, 610);


	engine = Engine.create();
	world = engine.world;

  tree = createSprite(960, 320, 500, 500);
  tree.addImage(treeimg);
  tree.scale = 0.45;

  ground = new Ground(600, 605, 1280, 10);

  stone = createSprite(200, 300, 33);
  stone.addImage(stoneimg);
  stone.scale = 0.12;

  boy = createSprite(250, 525, 40, 40);
  boy.addImage(boyimg);
  boy.scale = 0.12;

  mango1 = createSprite(770, 196, 10, 10);
  mango1.addImage(mangoimg);
  mango1.scale = 0.08;

  mango2 = createSprite(820, 180, 10, 10);
  mango2.addImage(mangoimg);
  mango2.scale = 0.08;

  mango3 = createSprite(830, 250, 10, 10);
  mango3.addImage(mangoimg);
  mango3.scale = 0.08;

  mango4 = createSprite(870, 215, 10, 10);
  mango4.addImage(mangoimg);
  mango4.scale = 0.08;

  mango5 = createSprite(880, 275, 10, 10);
  mango5.addImage(mangoimg);
  mango5.scale = 0.08;

  mango6 = createSprite(870, 150, 10, 10);
  mango6.addImage(mangoimg);
  mango6.scale = 0.08;

  mango7 = createSprite(900, 110, 10, 10);
  mango7.addImage(mangoimg);
  mango7.scale = 0.08;

  mango8 = createSprite(915, 170, 10, 10);
  mango8.addImage(mangoimg);
  mango8.scale = 0.08;

  mango9 = createSprite(915, 240, 10, 10);
  mango9.addImage(mangoimg);
  mango9.scale = 0.08;

  mango10 = createSprite(960, 245, 10, 10);
  mango10.addImage(mangoimg);
  mango10.scale = 0.08;

  mango11 = createSprite(940, 130, 10, 10);
  mango11.addImage(mangoimg);
  mango11.scale = 0.08;

  mango12 = createSprite(940, 205, 10, 10);
  mango12.addImage(mangoimg);
  mango12.scale = 0.08;

  mango13 = createSprite(965, 170, 10, 10);
  mango13.addImage(mangoimg);
  mango13.scale = 0.08;

  mango14 = createSprite(975, 100, 10, 10);
  mango14.addImage(mangoimg);
  mango14.scale = 0.08;

  mango15 = createSprite(1015, 85, 10, 10);
  mango15.addImage(mangoimg);
  mango15.scale = 0.08;

  mango16 = createSprite(1000, 140, 10, 10);
  mango16.addImage(mangoimg);
  mango16.scale = 0.08;

  mango17 = createSprite(990, 200, 10, 10);
  mango17.addImage(mangoimg);
  mango17.scale = 0.08;

  mango18 = createSprite(1015, 260, 10, 10);
  mango18.addImage(mangoimg);
  mango18.scale = 0.08;

  mango19 = createSprite(1030, 175, 10, 10);
  mango19.addImage(mangoimg);
  mango19.scale = 0.08;

  mango20 = createSprite(1055, 135, 10, 10);
  mango20.addImage(mangoimg);
  mango20.scale = 0.08;

  mango21 = createSprite(790, 225, 10, 10);
  mango21.addImage(mangoimg);
  mango21.scale = 0.08;

  mango22 = createSprite(1037, 225, 10, 10);
  mango22.addImage(mangoimg);
  mango22.scale = 0.08;
  
  mango23 = createSprite(1070, 200, 10, 10);
  mango23.addImage(mangoimg);
  mango23.scale = 0.08;

  mango24 = createSprite(1100, 170, 10, 10);
  mango24.addImage(mangoimg);
  mango24.scale = 0.08;

  mango25 = createSprite(1065, 255, 10, 10);
  mango25.addImage(mangoimg);
  mango25.scale = 0.08;

  mango26 = createSprite(1110, 237, 10, 10);
  mango26.addImage(mangoimg);
  mango26.scale = 0.08;

  mango27 = createSprite(1135, 195, 10, 10);
  mango27.addImage(mangoimg);
  mango27.scale = 0.08;

  mango28 = createSprite(1183, 210, 10, 10);
  mango28.addImage(mangoimg);
  mango28.scale = 0.08;

  mango29 = createSprite(1163, 250, 10, 10);
  mango29.addImage(mangoimg);
  mango29.scale = 0.08;

  mango30 = createSprite(740, 240, 10, 10);
  mango30.addImage(mangoimg);
  mango30.scale = 0.08;

  elasticline = new ElasticLine(stone.body, {x: 200, y: 300});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  tree.display();
  ground.display();
  stone.display();
  boy.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();

  mango21.display();
  mango22.display();
  mango23.display();
  mango24.display();
  mango25.display();
  mango26.display();
  mango27.display();
  mango28.display();
  mango29.display();
  mango30.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);
  detectcollision(stone, mango9);
  detectcollision(stone, mango10);

  detectcollision(stone, mango11);
  detectcollision(stone, mango12);
  detectcollision(stone, mango13);
  detectcollision(stone, mango14);
  detectcollision(stone, mango15);
  detectcollision(stone, mango16);
  detectcollision(stone, mango17);
  detectcollision(stone, mango18);
  detectcollision(stone, mango19);
  detectcollision(stone, mango20);
 
  detectcollision(stone, mango21);
  detectcollision(stone, mango22);
  detectcollision(stone, mango23);
  detectcollision(stone, mango24);
  detectcollision(stone, mango25);
  detectcollision(stone, mango26);
  detectcollision(stone, mango27);
  detectcollision(stone, mango28);
  detectcollision(stone, mango29);
  detectcollision(stone, mango30);
 
 
}

function detectcollision(lstone, lmango){
  mangoBodyPosition = lmango.body.position.x, lmango.body.position.y;
  stoneBodyPosition = lstone.body.position.x, lstone.body.position.y;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance< -lmango.r + lstone.r)
  {
    Matter.Body.setStatic(lmango.body, false);
  }

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    elasticline.fly();
}

function keyPressed(){
  if(keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x: 190, y: 390})
    launcherObject.attach(stone.body)
  }
}



