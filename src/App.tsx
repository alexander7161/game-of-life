import Cell from "components/Cell";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { advanceGame } from "store/game";
import { gameBoardSelector } from "store/game/selectors";
import { Status } from "types/game";

const App = () => {
  const dispatch = useDispatch();
  const board = useSelector(gameBoardSelector);
  console.table(
    board.map((r) => r.map((c) => (c.status === Status.Alive ? 1 : 0)))
  );

  return (
    <>
      <div onClick={() => dispatch(advanceGame())}>advance</div>
      <Cell />
    </>
  );
};

export default App;
