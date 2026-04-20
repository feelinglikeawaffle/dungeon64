let renderer, scene, camera;
let player;
let world;
let enemies = [];
let chaosEffects = [];

init();
animate();

function init() {
  const canvas = document.getElementById("gameCanvas");

  renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(1); // retro look

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.08); // N64 fog

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  player = new Player(camera);
  world = new World(scene);

  enemies = world.spawnEnemies();
  chaosEffects = rollChaosEffects(scene, world, player, enemies);

  window.addEventListener("resize", onResize);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  const dt = 0.016;

  applyChaos(dt, scene, world, player, enemies);

  player.update(dt, world);
  enemies.forEach(e => e.update(dt, player));

  renderer.render(scene, camera);
}
