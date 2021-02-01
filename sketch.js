var balloon;
var Background1;

function preload(){
Background1.loadImage("Hot Air Ballon-01.png");
ballonImg.loadAnimation("Hot Air Ballon-02.png,Hot Air Ballon-03.png,Hot Air Ballon-04.png");
}

function setup() {
  createCanvas(500,500);
  balloon.createSprite(400, 200, 50, 50);
}

function draw() {
  balloon.addAnimation(balloonImg)
  background.addImage(Background1)
  drawSprites();
}
if(keyDown(LEFT_ARROW)){
  balloon.x=balloon.x-10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x=balloon.x+10;
}
else if(keyDown(UP_ARROW)){
  balloon.y=balloon.y-10;
}
else if(keyDown(DOWN_ARROW)){
  balloon.y=balloon.y+10;
}
var balloonPosition=database.ref('balloon/height');
balloonPosition.on("value",readPosition,showError);

function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x':updateHeight.x+x,
    'y':height.y+y
  })
}
function readHeight(data){
  height=data.val();
  balloon.x=height.x;
  balloon.y=height.y;

}

function showError(){
  console.log("Error in writing database");
}
if(keyDown(UP_ARROW)){
  updateHeight(0,-10);
  balloon.addAnimation("Hot Air Ballon-01",balloonImg);
  balloon.scale=balloon.scale-0.01;
}
if(keyDown(DOWN_ARROW)){
  updateHeight(0,+10);
  balloon.addAnimation("Hot Air Ballon-01",balloonImg);
  balloon.scale=balloon.scale+0.01;
}