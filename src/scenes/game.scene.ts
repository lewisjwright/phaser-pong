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

    createPlayerPaddle() {
        // create shape
        this.player = this.add.rectangle(50, PLAYER_SIZE_HEIGHT / 2, 30, 100, 0xffffff, 1);

        // add to world physics
        this.physics.add.existing(this.player);

        // make so the ball doesnt push the paddle
        this.player.body.setImmovable(true);

        // make sure paddle doesn't leave the world
        this.player.body.setCollideWorldBounds(true);
    }

    updatePlayerPosition() {
        const cursors = this.input.keyboard.createCursorKeys();

        if (cursors.down.isDown) {
            this.player.body.setVelocityY(150);
        } else if (cursors.up.isDown) {
            this.player.body.setVelocityY(-150);
        } else {
            this.player.body.setVelocityY(0);
        }
    }

    createAiPaddle() {
        // create shape
        this.ai = this.add.rectangle(PLAYER_SIZE_WIDTH - 50, PLAYER_SIZE_HEIGHT / 2, 30, 100, 0xffffff, 1);

        // add to world physics
        this.physics.add.existing(this.ai);

        // make so the ball doesnt push the paddle
        this.ai.body.setImmovable(true);

        // make sure paddle doesn't leave the world
        this.ai.body.setCollideWorldBounds(true);
    }

    create(): void {
        this.createBall();
        this.createPlayerPaddle();
        this.createAiPaddle();

        // Add collisions for all objects likely to touch
        this.physics.add.collider(this.ball, this.player);
        this.physics.add.collider(this.ball, this.ai);

        const startingAngle = PhaserMath.Between(0, 360);
        const { x, y } = this.physics.velocityFromAngle(startingAngle, 200);

        this.ball.body.setVelocity(x, y);
    }

    update(): void {
        this.updatePlayerPosition();
    }
}

export { Game };
