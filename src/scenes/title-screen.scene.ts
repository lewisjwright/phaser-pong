import { Scene } from 'phaser';
import { PLAYER_SIZE_HEIGHT, PLAYER_SIZE_WIDTH, SCENE_KEYS } from '../consts';

class TitleScreen extends Scene {
    create() {
        const startText = this.add.text(PLAYER_SIZE_WIDTH / 2, PLAYER_SIZE_HEIGHT / 2, 'Welcome to Phaser Pong', {
            fontSize: '16px',
            color: '#ffffff',
        });

        const instruction = this.add.text(PLAYER_SIZE_WIDTH / 2, PLAYER_SIZE_HEIGHT / 2 + 30, 'Press space to start', {
            fontSize: '14px',
            color: '#ffffff',
        });

        startText.setOrigin(0.5, 0.5);
        instruction.setOrigin(0.5, 0.5);

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start(SCENE_KEYS.GAME);
        });
    }
}

export { TitleScreen };
