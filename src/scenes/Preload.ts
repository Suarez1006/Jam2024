import Phaser from "phaser";

export class Preload extends Phaser.Scene {
	constructor() {
		super("preload");
	}

	public preload(): void {
		this.load.image("logo", "img/2RGs.jpg");
	}

	public create(): void {
		this.add
			.text(1138, 1060, "Loading...", {
				fontSize: "50px",
				align: "center",
				fontFamily: "font1",
				color: "white",
			})
			.setOrigin(0.5)
			.setDepth(1);
		this.scene.scene.time.addEvent({
			delay: 1000,
			callback: () => {
				this.scene.start("mainMenu");
			},
		});
	}
}
