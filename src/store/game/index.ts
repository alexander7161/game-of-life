import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { advanceBoard, createBoard } from "./logic";
import { GameState } from "./types";

const INITIAL_SIZE = 75;
const INITIAL_INTERVAL = 4;

export const initialState: GameState = {
  active: false,
  board: createBoard(INITIAL_SIZE),
  year: 0,
  size: INITIAL_SIZE,
  interval: INITIAL_INTERVAL,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      state.active = true;
    },
    pauseGame(state) {
      state.active = false;
    },
    resetGame(
      state,
      {
        payload,
      }: PayloadAction<{ size?: number; interval?: number } | undefined>
    ) {
      if (payload?.interval) {
        state.interval = payload?.interval;
      }

      const newSize = payload?.size ?? state.size;
      state.board = createBoard(newSize);
      state.size = newSize;
    },
    advanceGame(state) {
      const { board } = state;
      state.board = advanceBoard(board);
      state.year++;
    },
  },
});
const { actions, reducer } = gameSlice;
export const { advanceGame, startGame, pauseGame } = actions;
export default reducer;
