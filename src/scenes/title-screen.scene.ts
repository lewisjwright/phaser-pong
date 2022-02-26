import Phaser from 'phaser';

class TitleScreen extends Phaser.Scene {
    create() {
        const startText = this.add.text(400, 250, 'Welcome to Phaser Pong', {
            fontSize: '16px',
            color: '#ffffff',
        });

        startText.setOrigin(0.5, 0.5);
    }
}

export { TitleScreen };
