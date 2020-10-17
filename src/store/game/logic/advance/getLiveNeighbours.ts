import { Cell, Status, Board } from "types/game";

const NEIGHBOUR_CONSTANTS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, 0],
  [1, 1],
  [1, -1],
];

const isAlive = (cell: Cell): boolean => cell.status === Status.Alive;

const getNeighbourCoord = (x: number, x1: number, max: number) => {
  const newValue = x + x1;
  switch (true) {
    case newValue === max:
      return 0;
    case newValue < 0:
      return max - 1;
    default:
      return newValue;
  }
};

export const getLiveNeighbours = ({ x, y }: Cell, board: Board): number =>
  NEIGHBOUR_CONSTANTS.reduce((total, [x1, y1]) => {
    const max = board.length;
    return (
      total +
      Number(
        isAlive(
          board[getNeighbourCoord(x, x1, max)][getNeighbourCoord(y, y1, max)]
        )
      )
    );
  }, 0);
