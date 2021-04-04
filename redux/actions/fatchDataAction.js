import * as types from "../../constant/actionType"; 

export const FetchListData = payload => ({
    type: types.GET_LIST_REQUEST,
    payload,
})