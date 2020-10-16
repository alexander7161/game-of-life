import { combineReducers } from "@reduxjs/toolkit";

import gameReducer from "./game";

const reducer = combineReducers({
  game: gameReducer,
});

export type AppState = ReturnType<typeof reducer>;

export default reducer;
