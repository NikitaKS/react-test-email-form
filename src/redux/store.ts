import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import AppReducer from "./app-reducer";

export const rootReducer = combineReducers({
    app: AppReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>

export type ActionTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<ActionTypes<T>>

export default store;
