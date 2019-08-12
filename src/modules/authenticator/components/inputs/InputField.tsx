import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { WrappedFieldProps } from "redux-form";
import Meta from "./Meta";

export default ({
    input: { onChange, value, ...restInput },
    meta,
    ...restProps
}: WrappedFieldProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                {...restProps}
                value={value}
                onChangeText={onChange}
                style={{
                    backgroundColor: "transparent",
                    color: "#FFFFFF",
                    text: "#FFFFFF"
                }}
            />
            <Meta {...meta} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 0,
        height: 55,
        margin: 5
    },
    input: {
        backgroundColor: "#FFFFFF",
        color: "#FFFFFF"
    }
});
