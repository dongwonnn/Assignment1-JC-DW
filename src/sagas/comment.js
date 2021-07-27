import { call, put, takeLatest } from "redux-saga/effects";
import * as fetchApi from "../lib/api/data";
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "../reducers/comment";

// saga 생성
function* fetchCommentsSaga(action) {
  try {
    const response = yield call(fetchApi.fetchCommentAPI, action.data);
    console.log(response);

    yield put({
      type: FETCH_COMMENTS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: FETCH_COMMENTS_FAILURE,
      payload: e,
    });
  }
}

export function* commentsSaga() {
  yield takeLatest(FETCH_COMMENTS_REQUEST, fetchCommentsSaga);
}
