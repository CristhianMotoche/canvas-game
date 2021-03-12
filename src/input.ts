import Paddle from "./paddle";

const LEFT_ARROW = 37, RIGHT_ARROW = 39;

export default class InputHandler {
  constructor(paddle: Paddle) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case LEFT_ARROW:
          paddle.moveLeft();
          break;
        case RIGHT_ARROW:
          paddle.moveRight();
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
