var moving, fixed, game1,game2,game3, game4


function setup() {
  createCanvas(800,500);
  moving=createSprite(100,100,50,50)
  moving.shapeColor="red"

  fixed=createSprite(300,150,50,50)
  fixed.shapeColor="red"

  game1= createSprite(100,100,50,50)
  game1.shapeColor="red"

  game2= createSprite(100,200,50,50)
  game2.shapeColor="red"

  game3= createSprite(100,300,50,50)
  game3.shapeColor="red"

  game4= createSprite(100,400,50,50)
  game4.shapeColor="red"
  
}

function draw() {
  background(0);  
moving.x=mouseX
moving.y=mouseY


if(isTouching(moving, game1 )){
  fixed.shapeColor="blue"
  moving.shapeColor="blue"
}
else{
  fixed.shapeColor="red"
  moving.shapeColor="red"
  
}


  drawSprites();
}
function isTouching( game1,game2){
  if(game1.x-game2.x < game1.width/2+game2.width/2
    && game2.x-game1.x < game1.width/2+game2.width/2
    
    && game2.y-game1.y < game1.height/2+game2.height/2
    && game1.y-game2.y < game1.height/2+game2.height/2){
   return true
    }
 
    else{
      return false
}}
