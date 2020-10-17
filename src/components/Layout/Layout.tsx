import React, { FC } from "react";
import { LayoutContainer } from "./styles";

const Layout: FC = ({ children }) => (
  <LayoutContainer>{children}</LayoutContainer>
);

export default Layout;
