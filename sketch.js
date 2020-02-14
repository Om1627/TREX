
var sun,planet1,planet2;



function setup() {
  createCanvas(1200,800);
  sun = createSprite(600,300,160,160);
  sun.shapeColor="yellow";
  sun.setCollider("circle",50,50);
  planet1 = createSprite(600,100,60,60);
  planet1.shapeColor="blue";
  planet1.setCollider("circle",30,30);
  planet2 = createSprite(600,500,60,60);
  planet2.shapeColor="green";
  planet2.setCollider("circle",30,30);
  planet1.velocityX=-2;
  planet2.velocityX=+2;
}

function draw() {
background(0);
  if (planet1.x===400){
    planet1.velocityX=0;
    planet1.velocityY=+2;
  }
  if (planet1.y===500){
    planet1.velocityX=+2;
    planet1.velocityY=0;
  }
  if (planet1.x===800){
    planet1.velocityX=0;
    planet1.velocityY=-2;
  }
  if (planet1.y===100&&planet1.x===800){
    planet1.velocityX=-2;
    planet1.velocityY=0;

 
  }
  if (planet2.x===400){
    planet2.velocityX=0;
    planet2.velocityY=+2;
  }
  if (planet2.y===500){
    planet2.velocityX=+2;
    planet2.velocityY=0;
  }
  if (planet2.x===800){
    planet2.velocityX=0;
    planet2.velocityY=-2;
  }
  if (planet2.y===100&&planet2.x===800){
    planet2.velocityX=-2;
    planet2.velocityY=0;

 
  }
 sun.x=World.mouseX;
 sun.y=World.mouseY;
 if (sun.collide(planet1)){
   planet1.destroy();
  
 }
 if (sun.collide(planet2)){
  planet2.destroy();
 }
 sun.debug = true;
 planet1.debug = true;
 planet2.debug = true;

  drawSprites();
}