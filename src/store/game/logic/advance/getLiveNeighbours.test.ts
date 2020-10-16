import {
  getMockBoard1Neighbour,
  getMockBoard2Neighbour,
  getMockBoard3Neighbour,
  getMockBoard4Neighbour,
  getMockBoardAllAlive,
  getMockBoardAllDead,
} from "store/game/fake-data";
import { Board } from "types/game";
import { getLiveNeighbours } from "./getLiveNeighbours";

const getTest = (createBoard: () => Board, neighboursCount: number) => {
  test(`3x3 ${neighboursCount} neighbours`, () => {
    const board = createBoard();
    const aliveNeighbours = getLiveNeighbours(board[1][1], board);
    expect(aliveNeighbours).toBe(neighboursCount);
  });
};

describe("getLiveNeighbours", () => {
  describe("3x3 All Alive", () => {
    const board = getMockBoardAllAlive();

    test("[1][1]", () => {
      const neighbours = getLiveNeighbours(board[1][1], board);
      expect(neighbours).toBe(8);
    });

    test("[0][0]", () => {
      const neighbours = getLiveNeighbours(board[0][0], board);
      expect(neighbours).toBe(8);
    });

    test("[2][2]", () => {
      const neighbours = getLiveNeighbours(board[2][2], board);
      expect(neighbours).toBe(8);
    });
  });
  describe("3x3 All Dead", () => {
    const board = getMockBoardAllDead();

    test("[1][1]", () => {
      const neighbours = getLiveNeighbours(board[1][1], board);
      expect(neighbours).toBe(0);
    });

    test("[0][0]", () => {
      const neighbours = getLiveNeighbours(board[0][0], board);
      expect(neighbours).toBe(0);
    });

    test("[2][2]", () => {
      const neighbours = getLiveNeighbours(board[2][2], board);
      expect(neighbours).toBe(0);
    });
  });

  describe("3x3", () => {
    getTest(getMockBoard1Neighbour, 1);
    getTest(getMockBoard2Neighbour, 2);
    getTest(getMockBoard3Neighbour, 3);
    getTest(getMockBoard4Neighbour, 4);
  });
});
