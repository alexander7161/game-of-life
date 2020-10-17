import { eventChannel } from "redux-saga";
import { call, cancel, fork, put, select, take } from "redux-saga/effects";
import { advanceGame, startGame, pauseGame } from "..";
import { selectGameInterval } from "../selectors";

const timer = (interval: number) =>
  eventChannel((emitter) => {
    const timerID = setInterval(() => emitter(""), interval);
    return () => {
      clearInterval(timerID);
    };
  });

export function* gameTimer() {
  const interval = yield select(selectGameInterval);
  const chan = yield call(timer, interval);
  try {
    while (true) {
      yield take(chan);
      yield put(advanceGame());
    }
  } finally {
    chan.close();
  }
}

export default function* () {
  while (yield take(startGame)) {
    const timerTask = yield fork(gameTimer);
    yield take(pauseGame);
    yield cancel(timerTask);
  }
}
