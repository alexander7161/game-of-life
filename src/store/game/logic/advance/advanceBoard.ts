import { Board } from "types/game";
import { advanceCell } from "./advanceCell";

export const advanceBoard = (board: Board): Board =>
  board.map((cells) => cells.map((c) => advanceCell(c, board)));
