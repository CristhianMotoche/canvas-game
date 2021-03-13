import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";


export default class Game {
  paddle: Paddle;
  ball: Ball;
  gameWidth: number;
  gameHeight: number;

  constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
  }

  start() {
    new InputHandler(this.paddle);
  }

  update(deltaTime: number) {
    this.paddle.update(deltaTime);
    this.ball.update(deltaTime);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.paddle.draw(ctx);
    this.ball.draw(ctx);
  }
}
