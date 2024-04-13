import Phaser from "phaser";
export class MainMenu extends Phaser.Scene {
	constructor() {
		super("mainMenu");
	}

	public create(): void {
		this.add.image(400, 400, "logo");
	}
}
