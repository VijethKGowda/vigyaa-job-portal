import * as types from "../../constant/actionType"; 

const initialState = {
  jobList : [],
  error :  null
}

export default function reducers (state = initialState, action){
  switch (action.type){
    case types.GET_LIST_REQUEST:
      return {
        ...state,
        jobList : action.payload.jobList
      };
    // case types.GET_LIST_SUCCESS:
    //   return {
    //     ...state,
    //     jobList : action.res ? action.res : []
    //   };
    // case types.GET_LIST_FAIL:
    //   return {
    //     ...state,
    //     jobList :  [],
    //     error :  "Bad Request"
    //   };
    default: return state
  }
}