import React from "react";
import { useSelector } from "react-redux";
import { selectCellStatus } from "store/game/selectors";
import { CellContainer } from "./styles";
import { CellProps } from "./types";

const Cell = ({ x, y }: CellProps) => {
  const status = useSelector(selectCellStatus(x, y));
  return <CellContainer status={status} />;
};

export default Cell;
