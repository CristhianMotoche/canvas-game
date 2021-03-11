import Paddle from "./paddle";
import InputHandler from "./input";

const CANVAS_ID = "game";
const HEIGHT = 500;
const WIDTH = 600;

const main = (): void => {
  const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;;
  const ctx = canvas.getContext("2d");
  new InputHandler();

  if (ctx) {
    gameLoop(ctx, 0);
  } else {
    alert("Invalid context")
  }
};

const paddle = new Paddle(WIDTH, HEIGHT);
let lastTime = 0;

const gameLoop = (ctx: CanvasRenderingContext2D, timestamp: number): void => {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  paddle.update(deltaTime);
  paddle.draw(ctx);
  window.requestAnimationFrame(
    (timestamp) => gameLoop(ctx, timestamp)
  );
}

main();
