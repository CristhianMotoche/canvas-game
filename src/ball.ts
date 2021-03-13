import Position from "./position";
import Game from "./game";

export default class Ball {
  game: Game;
  position: Position;
  speed: Position;
  size: number;

  constructor(game: Game) {
    this.game = game;
    this.size = 10;
    this.position = {
      x: 200,
      y: 10
    }
    this.speed = {
      x: 5,
      y: 5
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = "#00f";
    ctx.arc(
      this.position.x,
      this.position.y,
      this.size,
      0,
      Math.PI*2
    );
    ctx.fill();
  }

  update(deltaTime: number) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // Hit on left and right
    if(this.position.x > this.game.gameWidth || this.position.x < 0)
      this.speed.x = -this.speed.x;
    // Hit on top and bottom
    if(this.position.y > this.game.gameHeight || this.position.y < 0)
      this.speed.y = -this.speed.y;
    // Hit on paddle
    const bottomOfBall = this.position.y + this.size;
    const topOfPaddle =  this.game.paddle.position.y;
    const leftOfPaddle = this.game.paddle.position.x;
    const rightOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

    if (bottomOfBall >= topOfPaddle && (this.position.x >= leftOfPaddle && this.position.x <= rightOfPaddle)) {
      this.speed.y = -this.speed.y;
    }
  }
}
