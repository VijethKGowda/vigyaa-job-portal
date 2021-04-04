import { put, call, takeLatest, all} from "redux-saga/effects"
import { reduxApi } from "../../api/reduxApi"
import * as types from "../../constant/actionType"; 

export default function* watchOptionsListener () {
  yield takeLatest(types.GET_LIST_REQUEST, fetchJobList);
}

export function* fetchJobList({ payload }){
  try{
    const res = yield call (reduxApi, payload );
    yield all([
      put({ type : types.GET_LIST_SUCCESS, res })
    ])
  }
  catch (error){
    yield put({ type:types.GET_LIST_FAIL, error })
  }
}