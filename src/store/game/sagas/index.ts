import { fork } from "redux-saga/effects";
import TimerSagas from "./timer";

export default function* () {
  yield fork(TimerSagas);
}
