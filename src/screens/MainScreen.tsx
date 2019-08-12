import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

interface IMainScreen {
}

interface IMainScreenState {
    isFontLoaded: boolean;
}

interface IMainScreenState {
    isFontLoaded: boolean;
}
class MainScreen extends React.PureComponent<IMainScreen, IMainScreenState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isFontLoaded: false
        };
    }

    public render(){
      return (
        <View>
            <Text>Inside mainscreen</Text>
        </View>
      )
    };
}

export default MainScreen;
