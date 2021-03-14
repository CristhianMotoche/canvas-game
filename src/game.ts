import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";
import Brick from "./brick";
import { Level, buildLevel } from "./levels";


export default class Game {
  paddle: Paddle;
  ball: Ball;
  gameWidth: number;
  gameHeight: number;
  bricks: Brick[];

  constructor(gameWidth: number, gameHeight: number, level: Level) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.bricks = buildLevel(this, level);
  }

  start() {
    new InputHandler(this.paddle);
  }

  update(deltaTime: number) {
    this.paddle.update(deltaTime);
    this.ball.update(deltaTime);
    this.bricks.forEach(brick => brick.update(deltaTime));
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.paddle.draw(ctx);
    this.ball.draw(ctx);
    this.bricks.forEach(brick => brick.draw(ctx));
  }
}
