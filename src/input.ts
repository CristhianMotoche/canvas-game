import Paddle from "./paddle";
import Game from "./game";

const LEFT_ARROW = 37, RIGHT_ARROW = 39, ESC = 27;

export default class InputHandler {
  constructor(paddle: Paddle, game: Game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case LEFT_ARROW:
          paddle.moveLeft();
          break;
        case RIGHT_ARROW:
          paddle.moveRight();
          break;
        case ESC:
          game.togglePause();
          break;
      }
    })

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case LEFT_ARROW:
          paddle.stop();
          break;
        case RIGHT_ARROW:
          paddle.stop();
          break;
      }
    })
  }
}
