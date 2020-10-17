import { advanceGame, pauseGame, startGame } from "..";
import timerSaga from "./timer";
import SagaTester from "redux-saga-tester";
import GameReducer from "..";
describe("timer", () => {
  it("Should start timer on StartGame", async () => {
    const sagaTester = new SagaTester({
      reducers: { game: GameReducer },
    });
    sagaTester.start(timerSaga);

    sagaTester.dispatch(startGame());
    await sagaTester.waitFor(advanceGame.toString(), true);
    await sagaTester.waitFor(advanceGame.toString(), true);
    await sagaTester.waitFor(advanceGame.toString(), true);
    sagaTester.dispatch(pauseGame());
    expect(sagaTester.getCalledActions()).toMatchSnapshot();
  });

  it("Should stop timer on pauseGame", async () => {
    const sagaTester = new SagaTester({ reducers: { game: GameReducer } });
    sagaTester.start(timerSaga);

    sagaTester.dispatch(startGame());
    await sagaTester.waitFor(advanceGame.toString());
    sagaTester.dispatch(pauseGame());
    expect(sagaTester.numCalled(advanceGame.toString())).toBe(1);
    expect(sagaTester.getCalledActions()).toMatchSnapshot();
  });
});
