import { Board } from "types/game";

export type GameState = {
  active: boolean;
  board: Board;
  year: number;
  size: number;
  interval: number;
};
