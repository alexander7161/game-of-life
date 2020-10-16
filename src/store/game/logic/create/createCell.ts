import { Status, Cell } from "types/game";

export const createCell = ({
  x,
  y,
  status = Status.Empty,
}: {
  x: number;
  y: number;
  status?: Status;
}): Cell => ({
  x,
  y,
  status,
});
