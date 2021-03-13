import Position from "./position";
import Game from "./game";

export default class Ball {
  position: Position;
  speed: Position;
  size: number;
  gameWidth: number;
  gameHeight: number;

  constructor(game: Game) {
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
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

    if(this.position.x > this.gameWidth || this.position.x < 0)
      this.speed.x = -this.speed.x;
    if(this.position.y > this.gameHeight || this.position.y < 0)
      this.speed.y = -this.speed.y;
  }
}
