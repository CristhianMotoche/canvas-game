import Position from "./position";
import Game from "./game";
import detectCollision from "./collisionDetection";

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
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
