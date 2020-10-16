import { getMockBoardAllAlive } from "store/game/fake-data";
import { Status } from "types/game";
import { advanceBoard } from "./advanceBoard";

describe("advanceBoard", () => {
  test("overpopulation kills all cells", () => {
    const board = getMockBoardAllAlive();

    const nextBoard = advanceBoard(board);
    nextBoard.forEach((column) =>
      column.forEach((cell) =>
        expect(cell).toEqual({ ...cell, status: Status.Dead })
      )
    );
  });
});
