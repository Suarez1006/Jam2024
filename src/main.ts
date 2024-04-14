import Phaser from "phaser";
import { Preload } from "./scenes/Preload";
import { MainMenu } from "./scenes/MainMenu";

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.ScaleModes.RESIZE,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	scene: [Preload, MainMenu],
};

export default new Phaser.Game(config);
