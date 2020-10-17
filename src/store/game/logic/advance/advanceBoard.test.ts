import {
  getMockBoard1Neighbour,
  getMockBoard2Neighbour,
  getMockBoard3Neighbour,
  getMockBoard4Neighbour,
  getMockBoardAllAlive,
  getMockBoardEmpty,
} from "store/game/fake-data";
import { Board, Status } from "types/game";
import { createCell } from "../create/createCell";
import countAlive from "../utils/countAlive";
import { advanceBoard } from "./advanceBoard";

const getMockBoard = (getBoard: () => Board) => {
  const board = getBoard();
  board[1][1] = createCell({ x: 1, y: 1, status: Status.Alive });
  return board;
};

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

  test("0 - stays empty", () => {
    const board = getMockBoard(getMockBoardEmpty);
    const nextBoard = advanceBoard(board);
    expect(countAlive(nextBoard)).toBe(0);
  });

  test("1 - underpopulation kills cell", () => {
    const board = getMockBoard(getMockBoard1Neighbour);

    const nextBoard = advanceBoard(board);

    expect(countAlive(nextBoard)).toBe(0);
  });

  test("2 - birth", () => {
    const board = getMockBoard(getMockBoard2Neighbour);
    const nextBoard = advanceBoard(board);

    expect(countAlive(nextBoard)).toBe(9);
  });

  test("3 - one born", () => {
    const board = getMockBoard(getMockBoard3Neighbour);
    const nextBoard = advanceBoard(board);
    expect(countAlive(nextBoard)).toBe(4);
  });

  test("4 - overpopulation kills cells", () => {
    const board = getMockBoard(getMockBoard4Neighbour);
    expect(countAlive(board)).toBe(5);

    const nextBoard = advanceBoard(board);

    expect(countAlive(nextBoard)).toBe(0);
  });
});
