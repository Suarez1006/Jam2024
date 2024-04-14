import type { Scene } from "phaser";
import { Actor } from "./actor";

export class Player extends Actor {
	constructor(scene: Scene, x: number, y: number, texture: string) {
		super(scene, x, y, texture);
	}
}
