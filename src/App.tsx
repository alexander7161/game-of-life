import Board from "components/Board";
import React from "react";
import { useDispatch } from "react-redux";
import { pauseGame, startGame } from "store/game";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div onClick={() => dispatch(startGame())}>start</div>
      <div onClick={() => dispatch(pauseGame())}>pause</div>

      <Board />
    </>
  );
};

export default App;
