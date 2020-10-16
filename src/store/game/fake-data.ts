import { Board, Status } from "types/game";
import { createBoard } from "./logic/create";
import { createCell } from "./logic/create/createCell";

const fillCellWithNeighbour = (board: Board, x: number, y: number) => {
  board[x][y] = createCell({ x, y, status: Status.Alive });
  return board;
};

export const getMockBoardEmpty = () => createBoard(3, Status.Empty);

export const getMockBoardAllAlive = () => createBoard(3, Status.Alive);

export const getMockBoardAllDead = () => createBoard(3, Status.Dead);

export const getMockBoard1Neighbour = () => {
  const board = getMockBoardEmpty();
  return fillCellWithNeighbour(board, 0, 0);
};

export const getMockBoard2Neighbour = () => {
  const board = getMockBoard1Neighbour();
  return fillCellWithNeighbour(board, 0, 1);
};

export const getMockBoard3Neighbour = () => {
  const board = getMockBoard2Neighbour();
  return fillCellWithNeighbour(board, 1, 0);
};

export const getMockBoard4Neighbour = () => {
  const board = getMockBoard3Neighbour();
  return fillCellWithNeighbour(board, 2, 0);
};
