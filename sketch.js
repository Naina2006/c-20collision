var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600,200,100,70);
  fixedRect.shapeColor = "yellow";
 
 movingRect = createSprite(400, 200, 50, 100);
 movingRect.shapeColor = "yellow";
 
 fixedRect.debug = true ; 
 movingRect.debug = true ; 
}

function draw() {
  background(0);
  movingRect.x = mouseX ;
  movingRect.y = mouseY;
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    
      movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  else 
  movingRect.shapeColor = "red";
  
  drawSprites();
}