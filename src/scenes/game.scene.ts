import { Scene, Math as PhaserMath } from 'phaser';
import { PLAYER_SIZE_HEIGHT, PLAYER_SIZE_WIDTH } from '../consts';

class Game extends Scene {
    private ball!: any;
    private player!: any;
    private ai!: any;
    private playerScore: number = 0;
    private aiScore: number = 0;
    private playerScoreDisplay!: Phaser.GameObjects.Text;
    private aiScoreDisplay!: Phaser.GameObjects.Text;

    createBall() {
        this.ball = this.add.circle(PLAYER_SIZE_WIDTH / 2, PLAYER_SIZE_HEIGHT / 2, 10, 0xffffff, 1);
        this.physics.add.existing(this.ball);
        this.ball.body.setBounce(1, 1);

        (this.ball.body as Phaser.Physics.Arcade.Body).setCollideWorldBounds(true);

        this.physics.world.setBoundsCollision(false, false, true, true);
    }

    resetBall() {
        this.ball.setPosition(PLAYER_SIZE_WIDTH / 2, PLAYER_SIZE_HEIGHT / 2);
        const startingAngle = PhaserMath.Between(0, 360);
        const { x, y } = this.physics.velocityFromAngle(startingAngle, 200);

        (this.ball.body as Phaser.Physics.Arcade.Body).setVelocity(x, y);
    }

    createPlayerPaddle() {
        // create shape
        this.player = this.add.rectangle(50, PLAYER_SIZE_HEIGHT / 2, 30, 100, 0xffffff, 1);

        // add to world physics
        this.physics.add.existing(this.player);

        // make so the ball doesnt push the paddle
        (this.player.body as Phaser.Physics.Arcade.Body).setImmovable(true);

        // make sure paddle doesn't leave the world
        (this.player.body as Phaser.Physics.Arcade.Body).setCollideWorldBounds(true);
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
        (this.ai.body as Phaser.Physics.Arcade.Body).setImmovable(true);

        // make sure paddle doesn't leave the world
        (this.ai.body as Phaser.Physics.Arcade.Body).setCollideWorldBounds(true);
    }

    updateAiPosition() {
        const ballPosition = this.ball.y;
        const aiPosition = this.ai.y;
        const positionComparison = ballPosition - aiPosition;
        const aiSpeed = 100;

        // TODO: Implement difficulty selector maybe?
        if (positionComparison < 0) {
            // above
            (this.ai.body as Phaser.Physics.Arcade.Body).setVelocityY(-aiSpeed);

            if (Math.abs(positionComparison) < 10) {
                (this.ai.body as Phaser.Physics.Arcade.Body).setVelocityY(-(aiSpeed / 10));
            }
        } else if (positionComparison > 0) {
            // below
            (this.ai.body as Phaser.Physics.Arcade.Body).setVelocityY(aiSpeed);

            if (Math.abs(positionComparison) < 10) {
                (this.ai.body as Phaser.Physics.Arcade.Body).setVelocityY(aiSpeed / 10);
            }
        }
    }

    createScores() {
        const playerScorePosition = PLAYER_SIZE_WIDTH / 4;
        const aiScorePosition = parseInt((PLAYER_SIZE_WIDTH / 1.3333).toFixed());

        const scoreStyle = {
            fontSize: '40px',
        };

        this.playerScoreDisplay = this.add.text(playerScorePosition, 10, `${this.playerScore}`, scoreStyle);
        this.aiScoreDisplay = this.add.text(aiScorePosition, 10, `${this.aiScore}`, scoreStyle);
    }

    create(): void {
        this.createBall();
        this.createPlayerPaddle();
        this.createAiPaddle();
        this.createScores();

        // Add collisions for all objects likely to touch
        this.physics.add.collider(this.ball, this.player);
        this.physics.add.collider(this.ball, this.ai);

        const startingAngle = PhaserMath.Between(0, 360);
        const { x, y } = this.physics.velocityFromAngle(startingAngle, 200);

        (this.ball.body as Phaser.Physics.Arcade.Body).setVelocity(x, y);
    }

    update(): void {
        this.updatePlayerPosition();
        this.updateAiPosition();

        if (this.ball.x < 0) {
            this.resetBall();

            this.aiScore += 1;
            this.aiScoreDisplay.setText(`${this.aiScore}`);
        } else if (this.ball.x > PLAYER_SIZE_WIDTH) {
            this.resetBall();
            this.playerScore += 1;
            this.playerScoreDisplay.setText(`${this.playerScore}`);
        }
    }
}

export { Game };
