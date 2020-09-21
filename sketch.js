var wall, thickness;
var bullet, speed, weight;
function setup() {
  World.frameRate = 300;

  createCanvas(1536,200);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(70, 100, 30, 30);
  bullet.velocityX = speed;
  wall = createSprite(1450, 100, thickness, 150);

  }

function draw() {
  background("lightgray");  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
  var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
		if(damage > 10){
			wall.shapeColor = "red";
			textSize(30);
			fill("red");
      text("Wall was Ineffective, Press R to Rerun Simulation", 500, 100);
      textSize(15);
      text("Thickness: " + Math.round(thickness), 500, 120);
      text("Speed: " + Math.round(speed), 600, 120);
      text("Damamge: " + Math.round(damage), 700, 120);
    }
    if(damage <= 10){
      wall.shapeColor = "green";
			textSize(30);
			fill("green");
      text("Wall was Effective, Press R to Rerun Simulation", 500, 100);
      textSize(15);
      text("Thickness: " + Math.round(thickness), 500, 120);
      text("Speed: " + Math.round(speed), 600, 120);
      text("Damamge: " + Math.round(damage), 700, 120);
    }
		
  if(keyWentDown("r")){
	bullet.x = 70;
	thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
	bullet.velocityX = speed;
	wall.shapeColor = "gray";
    }
  }
 
  drawSprites();
  }

  function hasCollided(bullet, wall){
    var bulletRightEdge = bullet.x + (bullet.width / 2);
    var wallLeftEdge = wall.x - (wall.width / 2);

    if(bulletRightEdge >= wallLeftEdge){
      return true;
    }else{
      return false;
    }
  }
