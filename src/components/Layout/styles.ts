import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100vh;
  display: grid;

  // Desktop 2 columns
  @media (min-width: 801px) {
    grid-template-columns: 1fr minmax(150px, 25%);
  }

  // Mobile/Tablet 2 rows
  @media (max-width: 801px) {
    grid-template-rows: 1fr minmax(100px, 25%);
  }
`;
