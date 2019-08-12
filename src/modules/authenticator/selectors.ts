import { createSelector } from "reselect";
import { IReduxState } from "./redux/store";

const selector = (state: IReduxState) => state.status.isAuthenticated;

export const isAuthenticatedSelector = createSelector(selector, (isAuthenticated) => isAuthenticated);
