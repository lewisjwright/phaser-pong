import { Scene } from 'phaser';
import { PLAYER_SIZE_HEIGHT, PLAYER_SIZE_WIDTH } from '../consts';

class GameBackground extends Scene {
    create() {
        this.add.rectangle(PLAYER_SIZE_WIDTH / 2, PLAYER_SIZE_HEIGHT / 2, 2, PLAYER_SIZE_HEIGHT, 0xffffff, 1);
    }
}

export { GameBackground };
