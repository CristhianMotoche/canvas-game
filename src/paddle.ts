interface Position {
  x: number;
  y: number;
}


export default class Paddle {
  width: number;
  height: number;
  position: Position;

  constructor(gameWidth: number, gameHeight: number) {
    this.width = 150;
    this.height = 30;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    };
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#f00";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime: number) {
    if (!deltaTime) return;
    this.position.x += 5 / deltaTime;
  }
}
