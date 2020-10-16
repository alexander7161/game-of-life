import Cell from "components/Cell";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { advanceGame } from "store/game";
import { gameBoardSelector } from "store/game/selectors";

const App = () => {
  const dispatch = useDispatch();
  const board = useSelector(gameBoardSelector);

  return (
    <>
      <div onClick={() => dispatch(advanceGame())}>advance</div>
      {board.map((r, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "row" }}>
          {r.map((c) => (
            <Cell key={`${c.x}${c.y}`} cell={c} />
          ))}
        </div>
      ))}
    </>
  );
};

export default App;
