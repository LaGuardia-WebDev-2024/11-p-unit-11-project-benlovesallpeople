let trees = ["🌲", "🌳", "🌴"];
let snowflakes = ["❄", "❅", "❆"];
let decor = ["🏠", "⛪", "🏡"];
let flakes = [];
let bgColor;
let isSnowing = true;

function setup() {
  createCanvas(500, 500);
  bgColor = color(200, 230, 255);
  
  for (let i = 0; i < 100; i++) { 
    addSnowflake();
  }
}

function draw() {
  background(bgColor);
  drawScene();
  snowFall();
}

function drawScene() {
  textSize(100);
  text(decor[0], width/8, height - 180);
  
  textSize(130);
  for (let i = 0; i < 8; i++) {
    text(trees[i % trees.length], -50 + i*60, height-20);
  }
}

function addSnowflake() {
  flakes.push({
    x: random(width),
    y: random(-50, 0),
    s: random(5, 15),
    f: int(random(snowflakes.length))
  });
}

function keyPressed() {
  isSnowing = !isSnowing;
  
  if (!isSnowing) {
    flakes = [];
  } else {
    for (let i = 0; i < 50; i++) {
      addSnowflake();
    }
  }
  return false;
}

function snowFall() {
  if (!isSnowing) return;
  
  textSize(15);
  for (let flake of flakes) {
    text(snowflakes[flake.f], flake.x, flake.y);
    flake.y += flake.s/5;
    flake.x += random(-0.5, 0.5);
    if (flake.y > height) {
      flake.y = random(-100, 0);
      flake.x = random(width);
    }
  }
  
  if (random() < 0.1) {
    addSnowflake();
  }
}
