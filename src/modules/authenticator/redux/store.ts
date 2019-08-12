import { combineReducers, createStore } from "redux";
import status, { IStatusState } from "./reducers/status";

export interface IReduxState {
    status: IStatusState
}

export default createStore(combineReducers({ status }));
