import Phaser from 'phaser';
import { PLAYER_SIZE_HEIGHT, PLAYER_SIZE_WIDTH } from '../consts';

class TitleScreen extends Phaser.Scene {
    create() {
        const startText = this.add.text(PLAYER_SIZE_WIDTH / 2, PLAYER_SIZE_HEIGHT / 2, 'Welcome to Phaser Pong', {
            fontSize: '16px',
            color: '#ffffff',
        });

        startText.setOrigin(0.5, 0.5);
    }
}

export { TitleScreen };
