modal => {
  alert("Hello world")
}

let modalListener = document.getElementsByClassName("modal-button");
let overlay = document.getElementsByClassName('overlay')
modalListener[0].addEventListener("click", function(event) {
  event.preventDefault();
  overlay[0].style.display = "flex";
});
overlay[0].addEventListener("click", function(){
  overlay[0].style.display = "none";
})

//NOTE(Sam): this is the canvas we draw to
  // -- canvas elements have an orgin in the upper right
canvas = document.getElementById("canvas");

//NOTE(Sam): we set the canvas size here because if we set it with css the canvas coordinates don't get updated
canvas.width = 750;
canvas.height = 750;

context = canvas.getContext("2d");

//NOTE(Sam): this function blanks the screen
function clearCanvas() {
context.fillStyle = "rgb(32, 32, 32)"; //NOTE(Sam): I love this color ;)
context.fillRect(0, 0, canvas.width, canvas.height);
}

//NOTE(Sam): this class wraps an x and y component and can be used to represent a position as well as a vector
class Vector {

  //NOTE(Sam): the contructor takes in a x and y that are assigned to the x and y componet of the Vector
constructor(x, y) {
  this.x = x;
  this.y = y;
}

  //NOTE(Sam): this adds the x and y components of vector to this vector's x and y components
add(vector) {
  this.x+= vector.x;
  this.y+= vector.y;
}
}

//NOTE(Sam): this returns true if the rectangle passed through can be seen on the canvas or false otherwise
  // -- x and y coorespond to the upper right  corner of the rectangle
  // -- this function fails if rectangles are rotated
function inbounds(x, y, w, h) {
if(x > canvas.width || (x+w) < 0 || (y+h) < 0 || y > canvas.height) {
   return false;
} else {
   return true;
}
}

//NOTE(Sam): returns a random decimal between the min and max value with even probability
function random(min, max) {
return Math.random() * (max-min) + min;
}

//NOTE(Sam): this class represents a particle of smoke
  // -- each paritcle is represented by a square that has an age and a lifetime
  // -- the particles size is proportinal to how far it has progressed in its life
class Smoke {

  //NOTE(Sam): the constructor takes in a starting x, and y position
    // -- x corresponds to the center of the smoke particle
    // -- y corresponds to the top of the smoke particle
    // -- each smoke particle is given a pseudo-random: velocity, and initial size
constructor(x, y) {
  this.color = "red";
  this.maxSize = random(4, 6);

  var maxLifetime = 150;
  this.maxLifetime = maxLifetime;
  this.lifetime = random(1, maxLifetime);
  this.age = 0;

  this.gravity = new Vector(0, .05);
  this.windSpeed = .18;
  this.position = new Vector((x - this.maxSize/2), y);

  var maxVelocity = 5;
  this.maxVelocity = maxVelocity;
  this.velocity = new Vector(random(-maxVelocity, maxVelocity), random(0, maxVelocity));
}

  //NOTE(Sam): this function updates the smoke particles: (position, velocity, size, age)
    // - and draws it to the canvas
animate() {
  var position = this.position;
  var velocity = this.velocity;

  velocity.add(this.gravity);
  velocity.x+= random(-this.windSpeed, this.windSpeed);

  position.add(velocity)

  var size = this.maxSize * (1 - (this.age / this.lifetime));

  context.fillStyle = this.color;
  context.fillRect(position.x, position.y, size, size);
  this.age++;
}
}

//NOTE(Sam): this class represents a group of smoke particles that get updated together
class SmokeTrail {

  //NOTE(Sam): the contructor takes in a rocket that smokeTrail uses to align new smoke particles to
constructor(rocket) {
  this.rocket = rocket;
  this.smokes = [];

    //NOTE(Sam): the number of smoke particles added to the smokes array each time animate() gets called
  this.smokesPerAnimation = 25;
}

  //NOTE(Sam): this adds new smoke particles to the smokes array
    // - and removes particles that have reached their lifetime or have gone outside of the canvas
animate() {
  var smokes = this.smokes;
  var rocket = this.rocket;
  for(var x = 0; x < this.smokesPerAnimation; x++) {
    smokes.push(new Smoke((rocket.position.x + rocket.width/2), (rocket.position.y + rocket.height)));
  }

  for(var x = 0; x < smokes.length; x++) {
    var smoke = smokes[x];

    if( !inbounds(smoke.position.x, smoke.position.y, smoke.size, smoke.size)
        || smoke.age >= smoke.lifetime) {

      smokes.splice(x, 1);
      x--; //NOTE(Sam): we decriment x once so we don't skip the next smoke particle
    }

    smoke.animate();
  }
}
}

//NOTE(Sam): This represents a rectangular object with a position, velocity, acceleration and
  // - a smokeTrail attached to the bottom of it
class Rocket {
constructor() {
  this.color = "cyan";
  this.width = 10;
  this.height = 20;
  this.acceleration = new Vector(0, -.15);

  this.smokeTrail = new SmokeTrail(this);

  this.reset(); //NOTE(Sam): this sets the rockets initial position and velocity
}

  //NOTE(Sam): this is used to place the rocket on the bottom of canvas and zeros its velocity
reset() {
  this.position = new Vector((canvas.width - this.width)/2, canvas.height - this.height);
  this.velocity = new Vector(0, 0);
}

  //NOTE(Sam): this updates the rockets position and velocity and resets it if it has gone off canvas.
    // - the rocket and its smokeTrail get drawn to the screen after the rockets position is determined
animate() {
  var position = this.position;

  this.velocity.add(this.acceleration);
  position.add(this.velocity);

  if(!inbounds(position.x, position.y, this.width, this.height)) {
    this.reset();
  }

  this.smokeTrail.animate();

  context.fillStyle = this.color;
  context.fillRect(position.x, position.y, this.width, this.height);
}
}

rocket = new Rocket(); //NOTE(Sam): this is the instance of our rocket

//NOTE(Sam): this function clears the canvas and animates our rocket
function loop() {
clearCanvas();
rocket.animate();
}

//NOTE(Sam): this tell the browser to call loop every 16.6ms (60 fps)
setInterval(loop, 1000/60);
