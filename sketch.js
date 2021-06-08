var ground,groundImg;
var tom;
var jerry;
function preload() {
    //load the cat images here
  groundImg  = loadImage("images/garden.png");
  catImg1    = loadImage("images/cat1.png");
  catImg2    = loadImage("images/cat2.png");
  catImg3    = loadImage("images/cat3.png");
  catImg4    = loadImage("images/cat4.png");

  //load the mouse images here
  mouseImg1  = loadImage("images/mouse1.png");
  mouseImg2  = loadImage("images/mouse2.png");
  mouseImg3  = loadImage("images/mouse3.png");
  mouseImg4  = loadImage("images/mouse4.png");
}


function setup()
{
    //creates the main canvas
    createCanvas(975,705);

    //creates tom sprite 
    tom = createSprite(750,600);
    tom.addImage("tomSitting",catImg1);
    tom.scale = 0.19; 

    //creates jerry sprite 
    jerry = createSprite(200,600);
    jerry.addImage("ratSimple",mouseImg1);
    jerry.scale = 0.15;

}

function draw() 
{
    //creates the background
    background(groundImg);
    
     //changes the animation when tom & jerry colide
     if(tom.x - jerry.x < (tom.width - jerry.width) /  2)
     {
       tom.addImage("catHappy",catImg4);
       tom.changeImage("catHappy");
       tom.velocityX = 0;
       tom.x = 270;
                 
       jerry.addImage("mouseHappy",mouseImg4);
       jerry.changeImage("mouseHappy");

     }

      //changes the animation when left key is pressed
      if(keyDown("left_arrow") )
      {
         jerry.addImage("mouseTeasing",mouseImg3);
         jerry.changeImage("mouseTeasing");
         jerry.frameDelay = 25;

         tom.addAnimation("catMoving",catImg2,catImg3);
         tom.changeAnimation("catMoving");
         tom.velocityX = -2;

      }

    drawSprites();

}



