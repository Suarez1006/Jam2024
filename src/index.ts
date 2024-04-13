import * as Phaser from 'phaser';

class MyGame extends Phaser.Scene {
  constructor() {
    super('MyGame');
  }

  preload() {
    this.load.image('red', 'assets/red.png');
  }

  create() {
    const red = this.add.image(400, 150, 'red');
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: MyGame,
};

const game = new Phaser.Game(config);
