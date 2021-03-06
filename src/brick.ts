import Position from "./position";
import Game from "./game";
import detectCollision from "./collisionDetection";

export default class Brick {
  game: Game;
  width: number;
  height: number;
  position: Position;
  wasDeleted: boolean;

  constructor(game: Game, position: Position) {
    this.game = game;
    this.width = 55;
    this.height = 30;
    this.position = position;
    this.wasDeleted = false;
  }

  update(deltaTime: number) {
    if(detectCollision(this.game.ball, this)){
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.wasDeleted = true;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#0f0";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
