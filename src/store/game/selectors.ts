import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "store/store";

export const selectGameBoard = (state: AppState) => state.game.board;

export const selectCell = (x: number, y: number) =>
  createSelector(selectGameBoard, (board) => board[x][y]);

export const selectCellStatus = (x: number, y: number) => (state: AppState) =>
  selectCell(x, y)(state).status;

export const selectGameActive = (state: AppState) => state.game.active;

export const selectGameBoardSize = (state: AppState) => state.game.size;

export const selectGameInterval = (state: AppState) => state.game.interval;
