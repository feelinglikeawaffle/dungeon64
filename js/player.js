class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 150;
    this.radius = 10;
  }

  update(dt, keys) {
    let dx = 0, dy = 0;

    if (keys["w"]) dy -= 1;
    if (keys["s"]) dy += 1;
    if (keys["a"]) dx -= 1;
    if (keys["d"]) dx += 1;

    const len = Math.hypot(dx, dy);
    if (len > 0) {
      dx /= len;
      dy /= len;
    }

    this.x += dx * this.speed * dt;
    this.y += dy * this.speed * dt;
  }

  draw(ctx) {
    ctx.fillStyle = "#66ccff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
