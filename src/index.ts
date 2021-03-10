import Paddle from "./paddle";

const CANVAS_ID = "game";
const HEIGHT = 500;
const WIDTH = 600;

const main = (): void => {
  const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    draw(ctx);
  } else {
    alert("Invalid context")
  }
};

const draw = (ctx: CanvasRenderingContext2D): void => {
  const paddle = new Paddle(WIDTH, HEIGHT);
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  paddle.draw(ctx);
}

main();
