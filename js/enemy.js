class Enemy {
  constructor(x, z) {
    const tex = new THREE.TextureLoader().load("assets/enemy.png");
    const mat = new THREE.SpriteMaterial({ map: tex });

    this.sprite = new THREE.Sprite(mat);
    this.sprite.position.set(x, 1.5, z);
    this.sprite.scale.set(1.5, 1.5, 1.5);

    scene.add(this.sprite);
    this.speed = 1.2;
  }

  update(dt, player) {
    const dir = new THREE.Vector3().subVectors(
      player.camera.position,
      this.sprite.position
    );
    dir.y = 0;
    dir.normalize();

    this.sprite.position.addScaledVector(dir, this.speed * dt);
  }
}
