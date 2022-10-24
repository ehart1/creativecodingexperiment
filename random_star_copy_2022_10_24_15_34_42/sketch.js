function setup() {
  createCanvas(windowWidth, windowHeight);
  background(500)
  colorMode(HSB)
}

function draw() {
rect(random(400),random(400),mouseY,mouseX)
  stroke(mouseX,mouseY,100)
  noFill()
  circle(random(400),random(400),mouseY)
  stroke(mouseX,mouseY,100)
  noFill()
}