import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pauseGame, startGame } from "store/game";
import { selectGameActive } from "store/game/selectors";

const ToggleGameButton = () => {
  const dispatch = useDispatch();
  const active = useSelector(selectGameActive);

  return (
    <Button
      onClick={() => dispatch(active ? pauseGame() : startGame())}
      size="large"
      variant="contained"
    >
      {active ? "Pause" : "Start"}
    </Button>
  );
};

export default ToggleGameButton;
