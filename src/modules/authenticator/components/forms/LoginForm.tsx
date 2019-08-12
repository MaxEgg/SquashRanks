import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { Button } from "react-native-paper";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { required } from "../../validation";
import InputField from "../inputs/InputField";

const LoginForm = ({
    pristine,
    submitting,
    handleSubmit
}: InjectedFormProps) => {
    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled
            style={{ marginBottom: 15 }}
        >
            <View style={{ marginBottom: 20 }}>
                <Field
                    name="email"
                    label="Email"
                    type="outlined"
                    validate={required}
                    keyboardType={"email-address"}
                    component={InputField}
                />
                <Field
                    name="password"
                    label="Password"
                    secureTextEntry={true}
                    validate={required}
                    component={InputField}
                />
            </View>
            <Button
                loading={submitting}
                onPress={handleSubmit}
                mode="contained"
                disabled={pristine || submitting}
            >
                Login
            </Button>
        </KeyboardAvoidingView>
    );
};

export default reduxForm({
    form: "loginForm"
})(LoginForm);
