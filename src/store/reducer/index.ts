import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer/UserReducer";

export const rootReducer = combineReducers({
    data: UserReducer
})

export type RootState = ReturnType<typeof rootReducer>
