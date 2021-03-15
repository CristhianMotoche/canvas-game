import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";
import Brick from "./brick";
import { Level, buildLevel } from "./levels";


enum GameState {
  PAUSE,
  PLAY,
}

export default class Game {
  paddle: Paddle;
  ball: Ball;
  gameWidth: number;
  gameHeight: number;
  bricks: Brick[];
  state: GameState;

  constructor(gameWidth: number, gameHeight: number, level: Level) {
    this.state = GameState.PLAY;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.bricks = buildLevel(this, level);
  }

  start() {
    new InputHandler(this.paddle, this);
  }

  update(deltaTime: number) {
    if (this.state == GameState.PAUSE) return;

    this.paddle.update(deltaTime);
    this.ball.update(deltaTime);
    this.bricks.forEach(brick => brick.update(deltaTime));
    this.bricks = this.bricks.filter(brick => !brick.wasDeleted);
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.state == GameState.PAUSE) {
      ctx.fillStyle = "#aaa";
      ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Pause", this.gameWidth/2, this.gameHeight/2);
    }

    this.paddle.draw(ctx);
    this.ball.draw(ctx);
    this.bricks.forEach(brick => brick.draw(ctx));
  }

  togglePause() {
    if (this.state == GameState.PAUSE) {
      this.state = GameState.PLAY;
    } else {
      this.state = GameState.PAUSE;
    }
  }
}
