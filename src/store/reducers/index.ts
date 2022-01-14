import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducers} from "./todoReducers";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducers
})

export type RootState = ReturnType<typeof rootReducer>