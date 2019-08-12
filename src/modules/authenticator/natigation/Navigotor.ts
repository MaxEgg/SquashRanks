import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const AppNavigator = createStackNavigator(
    {
        Login: {
            navigationOptions: {
                header: null,
            },
            screen: LoginScreen,
        },
        Register: {
            navigationOptions: {
                header: null,
            },
            screen: RegisterScreen,
        },
        // SuccessMessage: {
        //     navigationOptions: {
        //         header: null,
        //     },
        //     // screen: RegisterdSuccessFullAndActivateEmailScreen,
        // },
    },
    {
        cardStyle: {
            backgroundColor: "rgba(0,0,0,0)",
        },
        headerMode: "screen",
        initialRouteName: "Login",
    }
);

export default createAppContainer(AppNavigator);
