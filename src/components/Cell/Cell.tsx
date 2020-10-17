import React from "react";
import { CellContainer } from "./styles";
import { CellProps } from "./types";

const Cell = ({ status }: CellProps) => <CellContainer status={status} />;

export default Cell;
