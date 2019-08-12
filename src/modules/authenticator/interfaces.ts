export interface IScreen {
    navigation: any;
}

export interface ILoginScreenProps extends IScreen {
    image: string;
}

export interface IBaseScreen {
    image: string;
    switchButtonText: string;
    children: JSX.Element | JSX.Element[];
    onSwitchScreen: () => void;
}
