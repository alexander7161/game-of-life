import Cell from "components/Cell";
import React from "react";
import { useSelector } from "react-redux";
import { selectGameBoardSize } from "store/game/selectors";
import { BoardContainer, RowContainer } from "./styles";

const Board = () => {
  const size = useSelector(selectGameBoardSize);

  return (
    <BoardContainer>
      {new Array(size).fill(null).map((_, x) => (
        <RowContainer key={x}>
          {new Array(size).fill(null).map((_, y) => (
            <Cell key={`${x}${y}`} x={x} y={y} />
          ))}
        </RowContainer>
      ))}
    </BoardContainer>
  );
};

export default Board;
