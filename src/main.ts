import Phaser from "phaser";

class Example extends Phaser.Scene {
	public preload(): void {
		this.load.image("logo", "img/2RGs.jpg");
	}

	public create(): void {
		const logo = this.add.image(400, 300, "logo");
		logo.scale = 0.4;
	}
}

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: Example,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 200, x: 0 },
		},
	},
};

new Phaser.Game(config);
