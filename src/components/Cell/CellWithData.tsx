import React from "react";
import { useSelector } from "react-redux";
import { selectCellStatus } from "store/game/selectors";
import { CellWithDataProps } from "./types";
import Cell from "./Cell";

const CellWithData = ({ x, y }: CellWithDataProps) => {
  const status = useSelector(selectCellStatus(x, y));
  return <Cell status={status} />;
};

export default CellWithData;
