import { ILoginScreenProps } from "../interfaces";
import React from "react";
import { View } from "react-native";
import AuthBase from "../components/layouts/AuthBase";
import LoginForm from "../components/forms/LoginForm";
import { Text } from "react-native-paper";

class LoginScreen extends React.PureComponent<ILoginScreenProps, {}> {
    public render() {
        return (
            <AuthBase
                switchButtonText="or sign in!"
                onSwitchScreen={this.handleButtonPress}
                image="./img/logo.png"
            >
                <LoginForm onSubmit={this.handleLogin} />
            </AuthBase>
        );
    }

    private handleButtonPress = () => {
        this.props.navigation.navigate("Register");
    };

    private handleLogin = () => {};
}

export default LoginScreen;
