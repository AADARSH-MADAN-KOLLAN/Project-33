var ground;
var plinko = [];
var particles = [];
var divisions = [];
var divisionHeight = 200;
var score = 0;

function setup() {
  createCanvas(450,650);

  engine = Matter.Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, outerWidth, 20)

  for(var k = 0; k <= width; k = k + 90){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for (var j = 50; j <= width - 50; j = j + 50){
    plinko.push(new Plinko(j, 75));
  }
  for (var j = 24; j <= width - 10; j = j + 50){
    plinko.push(new Plinko(j, 175));
  }
  for (var j = 50; j <= width - 15; j = j + 50){
    plinko.push(new Plinko(j,275));
  }
  for (var j = 24; j <= width - 10; j = j + 50){
    plinko.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");  

  console.log(mouseX, mouseY)

  Matter.Engine.update(engine);

  fill("white");
  textFont("timesnewroman")
  textSize(30)
  text("Score : "+score,20,40);
  fill("white");
  textFont("timesnewroman")
  textSize(25)
  text("400", 30, 455);
  text("200", 115, 455);
  text("100", 205, 455);
  text("200", 299, 455);
  text("400", 385, 455);

  ground.display();

  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  if(frameCount % 20 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();

    if (particles[i].body.position.x < 89 && particles[i].body.position.y > 450 && particles[i].body.position.y < 455) {
     score=score+400;
    }
   else if (particles[i].body.position.x < 179 && particles[i].body.position.x > 90 && particles[i].body.position.y > 450 && particles[i].body.position.y < 455) {
     score = score + 200;
   }
   else if (particles[i].body.position.x < 269 && particles[i].body.position.x > 180 && particles[i].body.position.y > 450 && particles[i].body.position.y < 455) {
     score = score + 100;
   }
   else if (particles[i].body.position.x < 359 && particles[i].body.position.x > 270 && particles[i].body.position.y > 450 && particles[i].body.position.y < 455) {
    score = score + 200;
  }
  else if (particles[i].body.position.x < 450 && particles[i].body.position.x > 360 && particles[i].body.position.y > 450 && particles[i].body.position.y < 455) {
    score = score + 400;
  }
  }
  
  for (var k = 0; k < plinko.length; k++){
    plinko[k].display();
  }  

  noFill();
  strokeWeight(10)
  stroke("cyan");
  rect(width/2, height/2, width, height)
}
/*function  getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect(), // abs. size of element
      scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
      scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

  return {
    x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
    y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
  }
}*/

//0, 89, 179, 269, 359, 539, 650