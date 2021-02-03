var balloon;
var Background1;
var database;
var position;
function preload(){
Background1=loadImage("Hot Air Ballon-01.png");
balloonImg=loadImage("Hot Air Ballon-02.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  balloon=createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImg);
  
var balloonPosition=database.ref('balloon/position');
balloonPosition.on("value",readPosition,showError);
}
function draw() {
  background(Background1);
  
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
  drawSprites();

}


function updateHeight(x,y){
  database.ref('balloon/position').set({
    'x':position.x+x,
    'y':position.y+y
  })
}
function readPosition(data){
  position=data.val();
  balloon.x=position.x;
  balloon.y=position.y;

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