import { Scene } from 'phaser';
import { PLAYER_SIZE_HEIGHT, PLAYER_SIZE_WIDTH } from '../consts';

class Game extends Scene {
    private ball!: Phaser.GameObjects.Arc;

    create() {
        this.ball = this.add.circle(PLAYER_SIZE_WIDTH / 2, PLAYER_SIZE_HEIGHT / 2, 10, 0xffffff, 1);
    }
}

export { Game };
