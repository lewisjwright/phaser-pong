import Phaser from 'phaser';
import { TitleScreen } from './scenes/title-screen.scene';

const config: Phaser.Types.Core.GameConfig = {
    width: 800,
    height: 500,
    type: Phaser.AUTO,
};

const game = new Phaser.Game(config);

game.scene.add('title-screen', TitleScreen);
game.scene.start('title-screen');
