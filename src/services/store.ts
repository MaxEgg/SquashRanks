import { createStore, combineReducers } from "redux";
import { AuthenticationReducer } from "authentication";

const combinedReducers = combineReducers({ AuthenticationReducer });
export default createStore(combinedReducers);