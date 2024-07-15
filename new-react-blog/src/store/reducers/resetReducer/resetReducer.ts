import { IObjectStringList } from "../../../tools/types";
import { defaultState, RESET_FAILED, RESET_SUCCESS } from "./constants";
import { IResetPasswordAction, IResetState } from "./types";

export const activatedReducer = (
    state: IResetState = defaultState,
    action: IResetPasswordAction
): IResetState => {
    switch (action.type) {
        case RESET_SUCCESS:
            return {
                ...state,
                isReset: true,
                errors: null,
            };
        case RESET_FAILED:
            return {
                ...state,
                isReset: false,
                errors: action.payload as IObjectStringList,
            };

        default:
            return state;
    }
};