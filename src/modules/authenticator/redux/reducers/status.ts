import { IAction, SET_STATUS } from "../../actions";

export interface IStatusState {
    isAuthenticated: boolean;
};

const initialState: IStatusState = {
    isAuthenticated: false,
}

export default (state = initialState, action: IAction): IStatusState => {
    switch (action.type) {
        case `${SET_STATUS}`:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated as boolean
            }
        default:
            return state;
    }
}