
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player,covid,bed1,bed2,covid,person1,person2,person3;
var p1Group,p2Group,p3Group;
var gameState="play";
var noninfG,infG,vG;

function preload(){

	
}

function setup() {
	createCanvas(800, 700);

    player=createSprite(300,600,30,30);
	covid=createSprite(100,100,30,30);
	bed1=createSprite(700,450,30,50);
	bed2=createSprite(700,600,30,50);
	
	noninfG=createGroup();
	infG=createGroup();
	vG=createGroup();

	player.shapeColor="green";
	covid.shapeColor="red";
    bed1.shapeColor="white";
	bed2.shapeColor="white";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

if (gameState==="play"){

if(keyDown("up")){
	player.y=player.y-3;
}
if(keyDown("left")){
	player.x=player.x-3;
}
if(keyDown("right")){
	player.x=player.x+3;
}

if(keyDown("w")){
    covid.y=covid.y-3;
}
if(keyDown("a")){
	covid.x=covid.x-3;
}
if(keyDown("s")){
	covid.x=covid.x+3;
}
spawnPeople1();
//spawnPeople2();
//spawnPeople3();

if(noninfG.isTouching(covid)){
	person1.shapeColor= "red"
	//noninfG.remove(person1);
	infG.add(person1)	
	}
	if(noninfG.isTouching(player)){
	person1.shapeColor= "green"
	vG.add(person1)	
	}
}

  drawSprites();
 
}

function spawnPeople1(){
if (frameCount % 110 === 0) {
person1=createSprite(500,700,30,30);
person1.x=Math.round(random(150,600));
person1.velocityY=-2;
noninfG.add(person1);
}

/*if(infG.isTouching(player)){
person1.x=700;
person1.y=450;
person1.velocityY=0;
//infG.add(person1)	
}*/
}
/*
function spawnPeople2(){
if (frameCount % 200 === 0) {
person2=createSprite(600,700,30,30);
person2.x=Math.round(random(150,600));
person2.velocityY=-2;
noninfG.add(person2);
}
}

function spawnPeople3(){
if (frameCount % 300 === 0) {
person3=createSprite(500,700,30,30);
person3.x=Math.round(random(150,600));
person3.velocityY=-2;
noninfG.add(person3);
}
}
*/