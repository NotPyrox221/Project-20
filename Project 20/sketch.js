var car
var wall
var speed
var weight

function setup() {
  createCanvas(1600,400);
  car= createSprite(50,200,50,50)
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX = speed
  car.shapeColor = "White"
  wall =createSprite(1500,200,100,200)
  wall.shapeColor="blue"

}

function draw() {
  background(10,10,10);  
  
  if(wall.x-car.x<(wall.width/2 + car.width/2)){
    car.velocityX= 0
    var deformation = 0.5*speed*speed*weight/22500
    if(deformation > 180){
      car.shapeColor="red"
    }
    if(deformation>100 && deformation < 180){
      car.shapeColor="yellow"
    }
    if(deformation<100 ){
      car.shapeColor="green"
    }
  }
  
  drawSprites();
}