import React from "react";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native";
import { styles } from "../../styles/BaseStyle";
import { IBaseScreen } from "../../interfaces";
import { Button } from "react-native-paper";

export default ({
    image,
    children,
    onSwitchScreen,
    switchButtonText
}: IBaseScreen) => {
    console.log("image", image);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("./../../img/logo.png")}
                    style={{ height: 200, width: 300 }}
                />
            </View>
            {children}
            <View style={styles.buttonContainer}>
                <Button onPress={onSwitchScreen}>s{switchButtonText}</Button>
            </View>
        </View>
    );
};
