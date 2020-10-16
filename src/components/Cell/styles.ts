import styled, { css } from "styled-components";
import { Status } from "types/game";

export const CellContainer = styled.div<{ status: Status }>`
  height: 10px;
  width: 10px;
  ${({ status }) => {
    switch (status) {
      case Status.Alive:
        return css`
          background-color: green;
        `;
      case Status.Dead:
      default:
        return css`
          background-color: white;
        `;
    }
  }}
`;
