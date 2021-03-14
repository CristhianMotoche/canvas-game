import Brick from "./brick";
import Game from "./game";

type Level = number[][];

const buildLevel = (game: Game, level: Level): Brick[] => {
  let bricks: Brick[] = [];
  level.forEach((row, idxRow) => {
    row.forEach((item, itemIdx) => {
      if(item == 1) {
        bricks.push(new Brick(game, {x: itemIdx*60 + 3, y: idxRow*40 + 80}));
      }
    })
  })
  return bricks;
};

const level1 = [
  [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export {
  Level,
  level1,
  buildLevel,
};
