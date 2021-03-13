import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";
import Brick from "./brick";


export default class Game {
  paddle: Paddle;
  ball: Ball;
  gameWidth: number;
  gameHeight: number;
  bricks: Brick[];

  constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.bricks = [];
    for (let i = 0; i < 7; i++){
      this.bricks.push(new Brick({ x: i*80 + 5, y: 20 }));
    }
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
    this.bricks.forEach(brick => brick.draw(ctx));
  }
}
