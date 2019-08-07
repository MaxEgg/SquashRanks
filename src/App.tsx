import React, { Fragment } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import store from "./services/store";
import { StyleSheet } from "react-native";
import { Authenticator } from "authentication";
import MainScreen from "./screens/MainScreen";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        accent: "#FFBD1B",
        disabled: "#404040",
        placeholder: "#919191",
        primary: "#000000"
    },
    roundness: 2
};

const App = () => {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <Authenticator>
                    <MainScreen />
                </Authenticator>
            </PaperProvider>
        </Provider>
    );
};

export default App;
