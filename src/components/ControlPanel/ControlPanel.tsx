import React from "react";
import { useDispatch } from "react-redux";
import { startGame, pauseGame } from "store/game";

const ControlPanel = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div onClick={() => dispatch(startGame())}>start</div>
      <div onClick={() => dispatch(pauseGame())}>pause</div>
    </div>
  );
};

export default ControlPanel;
