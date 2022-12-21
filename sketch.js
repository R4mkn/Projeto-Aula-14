var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0      
   

}

function draw() {
 background(0);
  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/4;
    }
  
  //arco em movimento
  bow.y = World.mouseY



   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
  }
   
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1: redBalloon();
    break;
    case 2: blueBalloon();
    break;
    case 3: greenBalloon();
    break;
    case 4: pinkBalloon();
    break;
    default:break;
  }
}
  

  

  

   drawSprites();   
}

    







// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var Red = createSprite(0,Math.round(random(15, 370)), 10, 10);
  Red.addImage(red_balloonImage);
  Red.velocityX = 3;
  Red.lifetime = 150;
  Red.scale = 0.1;
}

function blueBalloon() {
  var Blue = createSprite(0,Math.round(random(30, 340)), 10, 10);
  Blue.addImage(blue_balloonImage);
  Blue.velocityX = 3;
  Blue.lifetime = 150;
  Blue.scale = 0.1;
}

function greenBalloon() {
  var Green = createSprite(0,Math.round(random(25, 350)), 10, 10);
  Green.addImage(green_balloonImage);
  Green.velocityX = 3;
  Green.lifetime = 150;
  Green.scale = 0.1;
}

function pinkBalloon() {
  var Pink = createSprite(0,Math.round(random(5, 320)), 10, 10);
  Pink.addImage(pink_balloonImage);
  Pink.velocityX = 3;
  Pink.lifetime = 150;

}
