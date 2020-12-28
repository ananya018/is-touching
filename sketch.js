var moving,fixed;

function setup() {
  createCanvas(800,400);
  fixed = createSprite (400, 200, 50, 50);
  fixed.shapeColor = "green"
  moving = createSprite (600,200,50,80)
  moving.shapeColor = "green"
}

function draw() {
  background(0);  
  moving.y = mouseY;
  moving.x = mouseX;

  if (moving.x - fixed.x < moving.width/2 + fixed.width/2
    && fixed.x - moving.x < moving.width/2 + fixed .width/2
    && fixed.y - moving.y < moving.height/2 + fixed.height/2
    && moving.y - fixed.y < moving.height/2+ fixed.height/2
    ) {
    fixed.shapeColor ="red"
    moving.shapeColor ="red"
  }else {
    fixed.shapeColor ="green"
    moving.shapeColor ="green"
  }
  drawSprites();
}