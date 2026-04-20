class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 60;
    this.radius = 10;
    this.dead = false;
  }

  update(dt, player) {
    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 1) {
      this.x += (dx / dist) * this.speed * dt;
      this.y += (dy / dist) * this.speed * dt;
    }

    if (dist < this.radius + player.radius) {
      this.dead = true;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "#ff4444";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
