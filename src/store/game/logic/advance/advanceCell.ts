import { Cell, Status, Board } from "types/game";
import { createCell } from "../create/createCell";
import { getLiveNeighbours } from "./getLiveNeighbours";

export const advanceCell = (cell: Cell, board: Board): Cell => {
  const liveNeighbours = getLiveNeighbours(cell, board);
  const { x, y } = cell;
  if (cell.status === Status.Alive) {
    switch (true) {
      case liveNeighbours < 2:
        return createCell({ x, y, status: Status.Dead });
      case liveNeighbours > 3:
        return createCell({ x, y, status: Status.Dead });
      default:
        return createCell({ ...cell });
    }
  } else {
    switch (true) {
      case liveNeighbours === 3:
        return createCell({ x, y, status: Status.Alive });
      default:
        return createCell({ ...cell });
    }
  }
};
