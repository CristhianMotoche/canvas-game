import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";

const CANVAS_ID = "game";
const HEIGHT = 500;
const WIDTH = 600;

const paddle = new Paddle(WIDTH, HEIGHT);
const ball = new Ball(WIDTH, HEIGHT);

const main = (): void => {
  const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;;
  const ctx = canvas.getContext("2d");
  new InputHandler(paddle);

  if (ctx) {
    gameLoop(ctx, 0);
  } else {
    alert("Invalid context")
  }
};

let lastTime = 0;

const gameLoop = (ctx: CanvasRenderingContext2D, timestamp: number): void => {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  paddle.update(deltaTime);
  paddle.draw(ctx);
  ball.update(deltaTime);
  ball.draw(ctx);
  window.requestAnimationFrame(
    (timestamp) => gameLoop(ctx, timestamp)
  );
}

main();
