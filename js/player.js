class Player {
  constructor(camera) {
    this.camera = camera;
    this.camera.position.set(0, 1.7, 0);

    this.speed = 4;
    this.vel = new THREE.Vector3();

    this.keys = {};
    window.addEventListener("keydown", e => this.keys[e.key.toLowerCase()] = true);
    window.addEventListener("keyup", e => this.keys[e.key.toLowerCase()] = false);

    window.addEventListener("mousemove", e => {
      this.camera.rotation.y -= e.movementX * 0.002;
      this.camera.rotation.x -= e.movementY * 0.002;
      this.camera.rotation.x = Math.max(-1.2, Math.min(1.2, this.camera.rotation.x));
    });
  }

  update(dt, world) {
    const forward = new THREE.Vector3(
      Math.sin(this.camera.rotation.y),
      0,
      Math.cos(this.camera.rotation.y)
    );

    const right = new THREE.Vector3(
      Math.cos(this.camera.rotation.y),
      0,
      -Math.sin(this.camera.rotation.y)
    );

    this.vel.set(0, 0, 0);

    if (this.keys["w"]) this.vel.add(forward);
    if (this.keys["s"]) this.vel.sub(forward);
    if (this.keys["a"]) this.vel.sub(right);
    if (this.keys["d"]) this.vel.add(right);

    this.vel.normalize().multiplyScalar(this.speed * dt);

    this.camera.position.add(this.vel);
  }
}
