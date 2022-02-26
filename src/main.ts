import Phaser from 'phaser';
import { PLAYER_SIZE_HEIGHT, PLAYER_SIZE_WIDTH, SCENE_KEYS } from './consts';
import { TitleScreen } from './scenes/title-screen.scene';

const config: Phaser.Types.Core.GameConfig = {
    width: PLAYER_SIZE_WIDTH,
    height: PLAYER_SIZE_HEIGHT,
    type: Phaser.AUTO,
};

const game = new Phaser.Game(config);

game.scene.add(SCENE_KEYS.TITLE, TitleScreen);
game.scene.start(SCENE_KEYS.TITLE);
