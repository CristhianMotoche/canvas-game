import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";
import Brick from "./brick";
import { Level, buildLevel } from "./levels";


enum GameState {
  PAUSE,
  PLAY,
  MENU,
  OVER
}

export default class Game {
  paddle: Paddle;
  ball: Ball;
  gameWidth: number;
  gameHeight: number;
  bricks: Brick[];
  state: GameState;
  lives: number;

  constructor(gameWidth: number, gameHeight: number, level: Level) {
    this.state = GameState.MENU;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.bricks = buildLevel(this, level);
    this.lives = 3;
    new InputHandler(this.paddle, this);
  }

  start() {
    this.state = GameState.PLAY;
  }

  update(deltaTime: number) {
    if (this.lives == 0)
      this.state = GameState.OVER;

    if (
      this.state == GameState.PAUSE
      || this.state == GameState.MENU
      || this.state == GameState.OVER
    ) return;

    this.paddle.update(deltaTime);
    this.ball.update(deltaTime);
    this.bricks.forEach(brick => brick.update(deltaTime));
    this.bricks = this.bricks.filter(brick => !brick.wasDeleted);
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.state == GameState.MENU) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "#000";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.fillText("Press SPACE bar to start", this.gameWidth/2, this.gameHeight/2);
    } else if (this.state == GameState.PAUSE) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.fillText("Pause", this.gameWidth/2, this.gameHeight/2);
    } else if (this.state == GameState.OVER) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.fillText("Game Over", this.gameWidth/2, this.gameHeight/2);
    } else {
      this.paddle.draw(ctx);
      this.ball.draw(ctx);
      this.bricks.forEach(brick => brick.draw(ctx));
    }
  }

  togglePause() {
    if (this.state == GameState.PAUSE) {
      this.state = GameState.PLAY;
    } else {
      this.state = GameState.PAUSE;
    }
  }
}
