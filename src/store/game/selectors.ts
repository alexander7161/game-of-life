import { AppState } from "store/store";

export const gameBoardSelector = (state: AppState) => state.game.board;
