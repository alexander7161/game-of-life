import { Board } from "types/game";
import { advanceCell } from "./advanceCell";

export const advanceBoard = (board: Board): Board =>
  board.map((row) => row.map((c) => advanceCell(c, board)));
