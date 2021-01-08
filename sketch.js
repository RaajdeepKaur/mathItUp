function setup() {
  createCanvas(1200,800);
 // createSprite(400, 200, 50, 50);

 circle1 = new Circle(50,400,50,"red");
 circle2 = new Circle(100,300,50,"green");
 circle3 = new Circle(150,250,50,"blue");
 circle4 = new Circle(700,200,50,"red");
 circle5 = new Circle(650,225,50,"black");
 circle6 = new Circle(750,400,50,"green");
 circle7 = new Circle(500,300,50,"brown");
 circle8 = new Circle(450,750,50,"blue");
 circle9 = new Circle(300,600,50,"yellow");
 circle10 = new Circle(750,769,50,"pink");
}

function draw() {
  background(255,255,255);  

  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();
  circle9.display();
  circle10.display();
  drawSprites();
}