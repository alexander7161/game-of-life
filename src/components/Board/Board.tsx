import Cell from "components/Cell";
import React from "react";
import { BoardContainer, RowContainer } from "./styles";

const Board = () => (
  <BoardContainer>
    {new Array(50).fill(null).map((_, x) => (
      <RowContainer key={x}>
        {new Array(50).fill(null).map((_, y) => (
          <Cell key={`${x}${y}`} x={x} y={y} />
        ))}
      </RowContainer>
    ))}
  </BoardContainer>
);

export default Board;
