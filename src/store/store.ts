import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import reducer, { AppState } from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false }).concat(sagaMiddleware),
  devTools:
    process.env.NODE_ENV !== "production"
      ? { actionsBlacklist: ["game/advanceGame"] }
      : undefined,
});

sagaMiddleware.run(sagas);

export type { AppState };
export default store;
