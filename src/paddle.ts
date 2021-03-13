import Position from "./position";
import Game from "./game";

export default class Paddle {
  gameWidth: number;
  width: number;
  height: number;
  speed: number;
  maxSpeed: number;
  position: Position;

  constructor(game: Game) {
    this.gameWidth = game.gameWidth;
    this.width = 150;
    this.height = 30;
    this.maxSpeed = 5;
    this.speed = 0;

    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10,
    };
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#f00";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime: number) {
    if (!deltaTime) return;

    this.position.x += this.speed;

    if (this.position.x <= 0) this.position.x = 0;
    if (this.position.x >= this.gameWidth - this.width)
      this.position.x = this.gameWidth - this.width;
  }

  moveLeft() {
    this.speed -= this.maxSpeed;
  }

  moveRight() {
    this.speed += this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }
}
