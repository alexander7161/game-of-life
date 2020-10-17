import React from "react";

import {
  selectAlive,
  selectGameInterval,
  selectGameYear,
} from "store/game/selectors";

import { List } from "./styles";
import GameInformationItem from "./GameInformationItem";

const GameInformation = () => {
  const items = {
    Year: selectGameYear,
    Alive: selectAlive,
    Interval: selectGameInterval,
  };
  return (
    <List>
      {Object.entries(items).map(([title, valueSelector], i) => (
        <GameInformationItem
          key={title}
          title={title}
          valueSelector={valueSelector}
          showDivider={i !== Object.keys(items).length - 1}
        />
      ))}
    </List>
  );
};

export default GameInformation;
