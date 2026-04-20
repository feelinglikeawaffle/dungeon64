function rollChaosEffects() {
  const effects = [
    { name: "Slippery Floor", apply: chaos_slippery },
    { name: "Low Gravity", apply: chaos_lowGravity },
    { name: "Time Warp", apply: chaos_timeWarp }
  ];

  return [effects[Math.floor(Math.random() * effects.length)]];
}

function applyChaos(dt, player, enemies) {
  chaosEffects.forEach(effect => effect.apply(dt, player, enemies));
}

function chaos_slippery(dt, player) {
  player.speed = 220;
}

function chaos_lowGravity(dt, player) {
  player.y -= Math.sin(performance.now() * 0.002) * 10 * dt;
}

function chaos_timeWarp(dt, player, enemies) {
  if (Math.sin(performance.now() * 0.001) > 0) {
    enemies.forEach(e => e.speed = 20);
  } else {
    enemies.forEach(e => e.speed = 120);
  }
}

function drawChaosUI(ctx, chaosEffects) {
  ctx.fillStyle = "#fff";
  ctx.font = "14px monospace";
  ctx.fillText("Chaos: " + chaosEffects.map(c => c.name).join(", "), 10, 20);
}
