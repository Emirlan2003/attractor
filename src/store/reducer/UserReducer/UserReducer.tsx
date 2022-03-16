import { ActionTypes, EActionTypes, IInit } from "../../../types"





const initState: IInit = {
    user: {},
    repos: [],
    users: [],
    length: {},
    details: {},
    otherRepo: []
}


export const UserReducer = (state = initState, action: ActionTypes): IInit => {
    switch(action.type){
        case EActionTypes.GET_USER:
            return { ...state, user: action.payload };
        case EActionTypes.GET_REPOS:
            return { ...state, repos: action.payload };
        case EActionTypes.GET_USERS:
            return { ...state, users: action.payload };
        case EActionTypes.GET_LENGTH:
            return { ...state, length: action.payload };
        case EActionTypes.GET_DETAILS:
            return { ...state, details: action.payload };
        case EActionTypes.GET_OTHER_REPO:
            return { ...state, otherRepo: action.payload }
        default:
            return state
    }
}