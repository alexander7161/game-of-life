import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Board } from "types/game";
import { advanceBoard, createBoard } from "./logic";
import { GameState } from "./types";

const getInitialSize = (length: number) => Math.round(length / 10);

const INITIAL_SIZE = getInitialSize(
  window.innerHeight > window.innerWidth
    ? window.innerWidth
    : window.innerHeight
);

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
      }: PayloadAction<
        { size?: number; interval?: number; board?: Board } | undefined
      >
    ) {
      if (payload?.interval) {
        state.interval = payload?.interval;
      }
      const newBoard =
        payload?.board ?? createBoard(payload?.size ?? state.size);
      state.board = newBoard;
      state.size = newBoard.length;
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
