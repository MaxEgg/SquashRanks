import React from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import InputField from "../inputs/InputField";
import { required } from "../../validation";

const RegisterForm = ({
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
                    name="name"
                    placeholder="Name"
                    validate={required}
                    component={InputField}
                    type="outlined"
                />
                <Field
                    name="email"
                    placeholder="Email"
                    component={InputField}
                    type="outlined"
                />
                <Field
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    component={InputField}
                    type="outlined"
                />
            </View>
            <Button
                loading={submitting}
                onPress={handleSubmit}
                mode="contained"
                disabled={pristine || submitting}
            >
                Register
            </Button>
        </KeyboardAvoidingView>
    );
};

export default reduxForm({
    form: "registerForm"
})(RegisterForm);
