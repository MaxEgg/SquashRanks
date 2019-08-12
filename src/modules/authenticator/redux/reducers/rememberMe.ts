import { IAction } from "../../actions";

interface IAuthState {
    isAuthenticated: boolean;
};

const initialState: IAuthState = {
    isAuthenticated: false,
}


export default (state = initialState, action: IAction): IAuthState => {

}