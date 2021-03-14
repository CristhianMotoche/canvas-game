import Brick from "./brick";

type Level = number[][];

const buildLevel = (level: Level): Brick[] => {
  let bricks: Brick[] = [];
  level.forEach((row, idxRow) => {
    row.forEach((item, itemIdx) => {
      if(item == 1) {
        bricks.push(new Brick({x: itemIdx*60 + 3, y: idxRow*40 + 40}));
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
