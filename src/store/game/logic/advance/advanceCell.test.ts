import {
  getMockBoard1Neighbour,
  getMockBoard2Neighbour,
  getMockBoard3Neighbour,
  getMockBoard4Neighbour,
  getMockBoardAllAlive,
  getMockBoardEmpty,
} from "store/game/fake-data";
import { Status } from "types/game";
import { createCell } from "../create/createCell";
import { advanceCell } from "./advanceCell";

describe("advanceCell", () => {
  describe("alive", () => {
    const cell = createCell({ x: 1, y: 1, status: Status.Alive });

    test("0 - underpopulation kills cell", () => {
      const board = getMockBoardEmpty();

      const nextCell = advanceCell(cell, board);

      expect(nextCell.status).toBe(Status.Dead);
    });

    test("1 - underpopulation kills cell", () => {
      const board = getMockBoard1Neighbour();

      const nextCell = advanceCell(cell, board);

      expect(nextCell.status).toBe(Status.Dead);
    });

    test("2 - lives", () => {
      const board = getMockBoard2Neighbour();

      const nextCell = advanceCell(cell, board);

      expect(nextCell.status).toBe(Status.Alive);
    });

    test("3 - lives", () => {
      const board = getMockBoard3Neighbour();

      const nextCell = advanceCell(cell, board);

      expect(nextCell.status).toBe(Status.Alive);
    });

    test("4 - overpopulation kills cell", () => {
      const board = getMockBoard4Neighbour();

      const nextCell = advanceCell(cell, board);

      expect(nextCell.status).toBe(Status.Dead);
    });

    test("8 - overpopulation kills cell", () => {
      const board = getMockBoardAllAlive();

      const nextCell = advanceCell(cell, board);

      expect(nextCell.status).toBe(Status.Dead);
    });
  });

  describe("dead", () => {
    const cell = createCell({ x: 1, y: 1, status: Status.Dead });

    test("0 - no change", () => {
      const board = getMockBoardEmpty();

      const nextCell = advanceCell(cell, board);

      expect(nextCell).toEqual(cell);
    });

    test("1 - no change", () => {
      const board = getMockBoard1Neighbour();

      const nextCell = advanceCell(cell, board);

      expect(nextCell).toEqual(cell);
    });

    test("2 - no change", () => {
      const board = getMockBoard2Neighbour();

      const nextCell = advanceCell(cell, board);

      expect(nextCell).toEqual(cell);
    });

    test("3 - born", () => {
      const board = getMockBoard3Neighbour();

      const nextCell = advanceCell(cell, board);

      expect(nextCell.status).toBe(Status.Alive);
    });

    test("4 - no change", () => {
      const board = getMockBoard4Neighbour();

      const nextCell = advanceCell(cell, board);

      expect(nextCell).toEqual(cell);
    });

    test("8 - no change", () => {
      const board = getMockBoardAllAlive();

      const nextCell = advanceCell(cell, board);

      expect(nextCell).toEqual(cell);
    });
  });

  describe("empty", () => {
    const cell = createCell({ x: 1, y: 1, status: Status.Empty });

    test("0 - no change", () => {
      const board = getMockBoardEmpty();

      const nextCell = advanceCell(cell, board);

      expect(nextCell).toEqual(cell);
    });

    test("1 - no change", () => {
      const board = getMockBoard1Neighbour();

      const nextCell = advanceCell(cell, board);

      expect(nextCell).toEqual(cell);
    });

    test("2 - no change", () => {
      const board = getMockBoard2Neighbour();

      const nextCell = advanceCell(cell, board);

      expect(nextCell).toEqual(cell);
    });

    test("3 - born", () => {
      const board = getMockBoard3Neighbour();

      const nextCell = advanceCell(cell, board);

      expect(nextCell.status).toBe(Status.Alive);
    });

    test("4 - no change", () => {
      const board = getMockBoard4Neighbour();

      const nextCell = advanceCell(cell, board);

      expect(nextCell).toEqual(cell);
    });

    test("8 - no change", () => {
      const board = getMockBoardAllAlive();

      const nextCell = advanceCell(cell, board);

      expect(nextCell).toEqual(cell);
    });
  });
});
