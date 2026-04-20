class World {
  constructor(scene) {
    this.scene = scene;

    const wallGeo = new THREE.BoxGeometry(1, 3, 1);
    const wallMat = new THREE.MeshLambertMaterial({ color: 0x222244 });

    // Create a 20x20 room
    for (let x = -10; x <= 10; x++) {
      for (let z = -10; z <= 10; z++) {
        if (x === -10 || x === 10 || z === -10 || z === 10) {
          const wall = new THREE.Mesh(wallGeo, wallMat);
          wall.position.set(x, 1.5, z);
          this.scene.add(wall);
        }
      }
    }

    // Lighting
    const light = new THREE.PointLight(0xff8844, 1, 20);
    light.position.set(0, 3, 0);
    scene.add(light);
  }

  spawnEnemies() {
    const enemies = [];
    for (let i = 0; i < 5; i++) {
      enemies.push(new Enemy(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      ));
    }
    return enemies;
  }
}
