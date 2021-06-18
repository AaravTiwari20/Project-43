var backImage,backgr;
var player, player_running;
var ground,ground_img;
var bananaImage;
var FoodGroup;
var score=0;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png")  
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  FoodGroup= new Group();
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }
  spawnfood();

   if (FoodGroup.isTouching(player)){
   FoodGroup.destroyEach();
   score = score+1;
   player.scale += + 0.1;
   }
  drawSprites();
}
 function spawnfood(){
 if (frameCount%100===0){
 banana=createSprite(800,200,20,20);
 banana.y=Math.round(random(50,250));
 banana.addImage(bananaImage);
 banana.velocityX=-4;
 banana.scale=0.1;
 FoodGroup.add(banana);
 }
 }