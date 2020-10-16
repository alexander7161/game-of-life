import { Status } from "types/game";
import getRandomStatus from "../utils/getRandomStatus";
import { createCell } from "./createCell";

export const createBoard = (size = 8, status?: Status) =>
  new Array(size)
    .fill(null)
    .map((_, x) =>
      new Array(size)
        .fill(null)
        .map((_, y) =>
          createCell({ x, y, status: status ?? getRandomStatus() })
        )
    );
