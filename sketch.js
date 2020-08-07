var ball,img,paddle,pim;
function preload() {
  /* preload your images here of the ball and the paddle */
  pim = loadImage("paddle.png");
  img = loadImage("ball.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200, 200);
  paddle = createSprite(200, 400);
  /* assign the images to the sprites */
  ball.addImage("img", img);
  paddle.addImage("pim", pim);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  /* Allow the ball to bounceoff from the paddle */
    ball.bounceOff(paddle,randomVelocity);
    randomVelocity();
 
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    ball.y -= 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    ball.y += 20;
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityX = random(-6, 6);
  ball.velocityY = random(-6, 6);
}

