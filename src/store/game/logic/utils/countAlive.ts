import { Board, Status } from "types/game";

const countAlive = (board: Board) =>
  board.reduce(
    (total, row) =>
      total +
      row.reduce(
        (totalRow, cell) => totalRow + (cell.status === Status.Alive ? 1 : 0),
        0
      ),
    0
  );

export default countAlive;
