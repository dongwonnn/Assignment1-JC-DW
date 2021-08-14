import { all } from "redux-saga/effects";
import { commentsSaga } from "sagas/comment";

export function* rootSaga() {
  yield all([commentsSaga()]);
}
