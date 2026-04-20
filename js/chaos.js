function rollChaosEffects(scene, world, player, enemies) {
  return [
    chaos_roomSpin,
    chaos_fogPulse
  ];
}

function applyChaos(dt, scene, world, player, enemies) {
  chaosEffects.forEach(fn => fn(dt, scene, world, player, enemies));
}

function chaos_roomSpin(dt, scene) {
  scene.rotation.y += dt * 0.2;
}

function chaos_fogPulse(dt, scene) {
  const t = performance.now() * 0.001;
  scene.fog.density = 0.06 + Math.sin(t) * 0.03;
}
