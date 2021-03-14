import Position from "./position";

export default class Brick {
  width: number;
  height: number;
  position: Position;

  constructor(position: Position) {
    this.width = 55;
    this.height = 30;
    this.position = position;
  }

  update(deltaTime: number) {

  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#0f0";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
