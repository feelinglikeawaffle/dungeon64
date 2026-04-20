function generateRoom() {
  const enemies = [];

  for (let i = 0; i < 4; i++) {
    enemies.push(new Enemy(
      Math.random() * 700 + 50,
      Math.random() * 350 + 50
    ));
  }

  return {
    enemies,
    draw(ctx) {
      ctx.strokeStyle = "#444";
      ctx.lineWidth = 4;
      ctx.strokeRect(20, 20, 760, 410);
    }
  };
}
