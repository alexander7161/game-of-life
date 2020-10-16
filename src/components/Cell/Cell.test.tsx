import React from "react";
import { render } from "@testing-library/react";
import Cell from "./Cell";
import { Status } from "types/game";
import "jest-styled-components";

describe("Cell", () => {
  test("alive", async () => {
    const { container } = render(<Cell status={Status.Alive} />);
    expect(container.firstChild).toHaveStyleRule("background-color", "green");
  });

  test("empty", async () => {
    const { container } = render(<Cell status={Status.Empty} />);
    expect(container.firstChild).toHaveStyleRule("background-color", "white");
  });

  test("dead", async () => {
    const { container } = render(<Cell status={Status.Dead} />);
    expect(container.firstChild).toHaveStyleRule("background-color", "white");
  });
});
