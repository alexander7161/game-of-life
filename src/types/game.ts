export type Board = Cell[][];

export enum Status {
  Empty,
  Alive,
  Dead,
}

export type Cell = {
  status: Status;
  x: number;
  y: number;
};
