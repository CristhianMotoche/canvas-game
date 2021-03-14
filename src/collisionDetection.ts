import Ball from "./ball";
import Position from "./position";

type GameObject = {
  position: Position
  width: number
  height: number
}

const detectCollision = (ball: Ball, gameObj: GameObject): boolean => {
  const bottomOfBall = ball.position.y + ball.size;
  const topOfBall = ball.position.y;

  const topOfObj =  gameObj.position.y;
  const bottomOfObj =  gameObj.position.y + gameObj.height;
  const leftOfObj = gameObj.position.x;
  const rightOfObj = gameObj.position.x + gameObj.width;

  return (
    bottomOfBall >= topOfObj
    && topOfBall <=  bottomOfObj
    && ball.position.x >= leftOfObj
    && ball.position.x + ball.size <= rightOfObj
  )
};

export default detectCollision;
