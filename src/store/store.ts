import { configureStore } from "@reduxjs/toolkit";

import reducer, { AppState } from "./reducers";

const store = configureStore({
  reducer,
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

export type { AppState };
export default store;
