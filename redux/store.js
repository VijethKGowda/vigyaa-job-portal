import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import createSagaMiddleware from 'redux-saga'
import {fetchDataReducer} from "../redux/reducers"
// import rootSaga from "../redux/saga"

 const reducer = combineReducers({
    jobData : fetchDataReducer
 })

 const store = (initialState, context = {}) => {
  // const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(reducer, composeWithDevTools(
      // applyMiddleware(sagaMiddleware)
      )),
    // runSaga: sagaMiddleware.run(rootSaga, context),
  }
}
export default store