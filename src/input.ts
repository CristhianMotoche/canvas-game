export default class InputHandler {
  constructor() {
    const LEFT_ARROW = 37, RIGHT_ARROW = 39;

    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case LEFT_ARROW:
          console.log("LEFT");
          break;
        case RIGHT_ARROW:
          console.log("RIGHT");
          break;
      }
    })
  }
}
