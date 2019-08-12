import React from "react";
import { connect, Provider } from "react-redux";
import store, { IReduxState } from "../redux/store";
import { isAuthenticatedSelector } from "../selectors";
import Navigator from "../natigation/Navigotor";

interface IProps {
    children: JSX.Element;
}

export default ({ children }: IProps) => {
    // console.error("asdfas");
    const isAuthenticated = isAuthenticatedSelector(store.getState());
    return isAuthenticated ? (
        children
    ) : (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
};
