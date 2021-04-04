import {fork} from "redux-saga/effects"

import fetchDataSaga from "./fetchDataSaga"

export default function* startForman() {
  yield fork(fetchDataSaga)
}