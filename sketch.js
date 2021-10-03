function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(snow1);  
  drawSprites();
}
function preload(){
snow1=loadImage("snow1.jpg")
}
