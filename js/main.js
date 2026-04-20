const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

let lastTime = performance.now();
let dt = 0;

let currentRoom = null;

// Input
const keys = {};
window.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
window.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

// Game objects
const player = new Player(WIDTH / 2, HEIGHT / 2);
let enemies = [];
let chaosEffects = [];
let glyphs = [];

// Load first room
function loadRoom() {
  currentRoom = generateRoom();
  enemies = currentRoom.enemies;
  chaosEffects = rollChaosEffects();
}

loadRoom();

// Main loop
function gameLoop() {
  const now = performance.now();
  dt = (now - lastTime) / 1000;
  lastTime = now;

  update(dt);
  draw();

  requestAnimationFrame(gameLoop);
}

function update(dt) {
  applyChaos(dt, player, enemies);

  player.update(dt, keys);

  enemies.forEach(e => e.update(dt, player));
  enemies = enemies.filter(e => !e.dead);

  if (enemies.length === 0 && keys["n"]) {
    loadRoom();
  }
}

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  currentRoom.draw(ctx);

  player.draw(ctx);
  enemies.forEach(e => e.draw(ctx));

  drawChaosUI(ctx, chaosEffects);
}

gameLoop();
