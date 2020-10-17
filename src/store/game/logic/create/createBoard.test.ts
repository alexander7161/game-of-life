import { Status } from "types/game";
import { createBoard } from ".";

describe("createInitialBoard", () => {
  test("should create inital board", () => {
    const board = createBoard(4, Status.Empty);
    expect(board).toMatchSnapshot();
  });

  test("size 0 creates empty array", () => {
    const board = createBoard(0);
    expect(board).toEqual([]);
  });

  test("size -1 throws error", () => {
    expect(() => createBoard(-1)).toThrow(RangeError);
  });

  test("should create large inital board", () => {
    const board = createBoard(99, Status.Empty);
    expect(board).toMatchSnapshot();
    expect(board.length).toBe(99);
    expect(board[0].length).toBe(99);
  });
});
