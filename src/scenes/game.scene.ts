import { Scene, Math as PhaserMath } from 'phaser';
import { PLAYER_SIZE_HEIGHT, PLAYER_SIZE_WIDTH } from '../consts';

class Game extends Scene {
    private ball!: any;
    private player!: any;
    private ai!: any;

    createBall() {
        this.ball = this.add.circle(PLAYER_SIZE_WIDTH / 2, PLAYER_SIZE_HEIGHT / 2, 10, 0xffffff, 1);
        this.physics.add.existing(this.ball);
        this.ball.body.setBounce(1, 1);

        this.ball.body.setCollideWorldBounds(true);
    }

    create(): void {
        this.createBall();

        const startingAngle = PhaserMath.Between(0, 360);
        const { x, y } = this.physics.velocityFromAngle(startingAngle, 200);

        this.ball.body.setVelocity(x, y);
    }
}

export { Game };
