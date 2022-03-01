import { Scene } from 'phaser';
import { PLAYER_SIZE_HEIGHT, PLAYER_SIZE_WIDTH, SCENE_KEYS } from '../consts';

class WinScreen extends Scene {
    create() {
        const title = this.add.text(PLAYER_SIZE_WIDTH / 2, PLAYER_SIZE_HEIGHT / 2, 'You Win! Congrats!', {
            fontSize: '16px',
            color: '#ffffff',
        });

        const instruction = this.add.text(
            PLAYER_SIZE_WIDTH / 2,
            PLAYER_SIZE_HEIGHT / 2 + 30,
            'Press space to play again',
            {
                fontSize: '14px',
                color: '#ffffff',
            },
        );

        title.setOrigin(0.5, 0.5);
        instruction.setOrigin(0.5, 0.5);

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start(SCENE_KEYS.GAME);
        });
    }
}

export { WinScreen };
