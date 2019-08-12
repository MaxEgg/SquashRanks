import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WrappedFieldMetaProps } from "redux-form";

export default ({ touched, error, warning }: WrappedFieldMetaProps) => {
    return (
        <View
            style={[
                touched && error !== "" && styles.errorContainer,
                touched && warning !== "" && styles.warningContainer
            ]}
        >
            {touched &&
                ((error && <Text>{error}</Text>) ||
                    (warning && <Text>{warning}</Text>))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    errorContainer: {
        backgroundColor: "#f49d41"
    },
    warningContainer: {
        backgroundColor: "#f45f42"
    }
});
