import Board from "components/Board";
import React from "react";
import { useDispatch } from "react-redux";
import { advanceGame } from "store/game";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div onClick={() => dispatch(advanceGame())}>advance</div>;
      <Board />
    </>
  );
};

export default App;
