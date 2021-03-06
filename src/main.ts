import Phaser from 'phaser';
import { PLAYER_SIZE_HEIGHT, PLAYER_SIZE_WIDTH, SCENE_KEYS } from './consts';
import * as SCENES from './scenes';

const config: Phaser.Types.Core.GameConfig = {
    width: PLAYER_SIZE_WIDTH,
    height: PLAYER_SIZE_HEIGHT,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
        },
    },
};

const game = new Phaser.Game(config);

game.scene.add(SCENE_KEYS.TITLE, SCENES.TitleScreen);
game.scene.add(SCENE_KEYS.GAME, SCENES.Game);
game.scene.add(SCENE_KEYS.BACKGROUND, SCENES.GameBackground);
game.scene.add(SCENE_KEYS.WIN, SCENES.WinScreen);
game.scene.add(SCENE_KEYS.LOSE, SCENES.LoseScreen);

game.scene.start(SCENE_KEYS.TITLE);
