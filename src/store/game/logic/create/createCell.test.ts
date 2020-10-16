import { Status } from "types/game";
import { createCell } from "./createCell";

describe("createCell", () => {
  test("should create inital cell", () => {
    const cell = createCell({ x: 0, y: 0 });
    expect(cell.status).toBe(Status.Empty);
    expect(cell.x).toBe(0);
    expect(cell.y).toBe(0);
  });
});
