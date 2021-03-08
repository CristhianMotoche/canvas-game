const CANVAS_ID = "game";

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
  ctx.fillStyle = "#f00";
  ctx.fillRect(20, 20, 100, 100);
}

main();
