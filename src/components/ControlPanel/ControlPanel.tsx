import React from "react";

import GameInformation from "./GameInformation";
import { ControlPanelContainer } from "./styles";
import ToggleGameButton from "./ToggleGameButton";

const ControlPanel = () => (
  <ControlPanelContainer>
    <GameInformation />
    <ToggleGameButton />
  </ControlPanelContainer>
);

export default ControlPanel;
