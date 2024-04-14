import { Player } from "../elements/Player";

export class GameScene extends Phaser.Scene {
	private player!: Player;
	constructor() {
		super("GameScene");
	}

	public create(): void {
		this.player = new Player(this, 100, 100, "a");
		this.player;
	}
}
