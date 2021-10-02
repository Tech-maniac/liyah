var fixedRect, movingRect;

function setup() 
{
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(500,200,30,100);
  movingRect.shapeColor = "green";
}

function draw() 
{
  background("pink");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;



  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else
  {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green"; 
  }

  





  drawSprites();
  textSize(30)
  fill("black")
  text("x : "+mouseX+" y : "+mouseY,mouseX,mouseY)
}