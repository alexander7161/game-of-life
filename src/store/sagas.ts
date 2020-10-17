import { fork } from "redux-saga/effects";

import GameSagas from "./game/sagas";

export default function* () {
  yield fork(GameSagas);
}
