import Game from "./game";

const CANVAS_ID = "game";
const HEIGHT = 500;
const WIDTH = 600;

const game = new Game(WIDTH, HEIGHT);
game.start();

const main = (): void => {
  const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;;
  const ctx = canvas.getContext("2d");

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

  game.update(deltaTime);
  game.draw(ctx);

  window.requestAnimationFrame(
    (timestamp) => gameLoop(ctx, timestamp)
  );
}

main();
