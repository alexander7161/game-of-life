import { Status } from "types/game";
import { createCell } from "./createCell";

describe("createCell", () => {
  test("should create empty cell", () => {
    const cell = createCell({ x: 0, y: 0 });
    expect(cell.status).toBe(Status.Empty);
    expect(cell.x).toBe(0);
    expect(cell.y).toBe(0);
  });

  test("should create alive cell", () => {
    const cell = createCell({ x: 0, y: 0, status: Status.Alive });
    expect(cell.status).toBe(Status.Alive);
    expect(cell.x).toBe(0);
    expect(cell.y).toBe(0);
  });

  test("should create dead cell", () => {
    const cell = createCell({ x: 0, y: 0, status: Status.Dead });
    expect(cell.status).toBe(Status.Dead);
    expect(cell.x).toBe(0);
    expect(cell.y).toBe(0);
  });
});
