import { View, Image } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import { IScreen } from "../interfaces";
import AuthBase from "../components/layouts/AuthBase";
import RegisterForm from "../components/forms/RegisterForm";

class RegisterScreen extends React.PureComponent<IScreen, {}> {
    public render() {
        return (
            <AuthBase
                switchButtonText="or sign in!"
                onSwitchScreen={this.handleButtonPress}
                image="./img/logo.png"
            >
                <RegisterForm onSubmit={this.handleRegister} />
            </AuthBase>
        );
    }

    handleButtonPress = (): void => {};
    handleRegister = (): void => {};
}

export default RegisterScreen;
