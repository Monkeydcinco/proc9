var box;


function setup() {
  createCanvas(600,600);
  box =createSprite(300,300,50,50);
  box.shapeColor="white";
}

function draw() 
{
  background(0);

  if (keyIsDown(UP_ARROW)) {
    background("yellow")
  }

  if (keyIsDown(DOWN_ARROW)) {
    background("blue")
  }
  if (keyIsDown(RIGHT_ARROW)) {
    background("red")
  }

  if (keyIsDown(LEFT_ARROW)) {
    background("green")
  }

  drawSprites();
}




