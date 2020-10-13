var fixedRect;
var movingRect;
var rect1;
var rect2;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(250,200,50,50)
  fixedRect.shapeColor = "blue";
  movingRect=createSprite(400,200,50,80);
  movingRect.shapeColor = "blue";
  rect1=createSprite(300,0,50,50);
  rect1.shapeColor = "green";
  rect1.velocityY=4;
  rect2=createSprite(300,400,50,20);
  rect2.shapeColor = "green";
  rect2.velocityY=-4;
}

function draw() {
  background (0)
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2&&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2&&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor = "aqua";
    fixedRect.shapeColor = "aqua";
  }else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  

  if (rect1.x-rect2.x === rect1.width/2+rect2.width/2&&
  rect1.x-rect2.x === rect1.width/2+rect2.width/2){
rect1.velocityX=rect1.velocityX*(-1);
rect2.velocityX=rect2.velocityX*(-1);
} 
if (rect1.y-rect2.y ===rect1.height/2+rect2.height/2&&
  rect1.y-rect2.y === rect1.height/2+rect2.height/2){
rect1.velocityY=rect1.velocityY*(-1);
rect2.velocityY=rect2.velocityY*(-1);
}
  drawSprites();
}