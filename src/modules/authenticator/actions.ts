export interface IAction {
    type: string;
    payload: {
        [key: string]: any;
    };
}

export const SET_STATUS = "SET_STATUS";