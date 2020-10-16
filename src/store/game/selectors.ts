import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "store/store";

export const gameBoardSelector = (state: AppState) => state.game.board;

export const selectCell = (x: number, y: number) =>
  createSelector(gameBoardSelector, (board) => board[x][y]);

export const selectCellStatus = (x: number, y: number) => (state: AppState) =>
  selectCell(x, y)(state).status;
