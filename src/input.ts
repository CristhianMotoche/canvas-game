import Paddle from "./paddle";

export default class InputHandler {
  constructor(paddle: Paddle) {
    const LEFT_ARROW = 37, RIGHT_ARROW = 39;

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
  }
}
