import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { advanceBoard, createBoard } from "./logic";
import { GameState } from "./types";

export const initialState: GameState = {
  board: createBoard(),
  year: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    advanceGame: ({ board, year }) => ({
      board: advanceBoard(board),
      year: year + 1,
    }),
  },
});
const { actions, reducer } = gameSlice;
export const { advanceGame } = actions;
export default reducer;
