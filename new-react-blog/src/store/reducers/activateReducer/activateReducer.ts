import { ACTIVATION_FAILED, ACTIVATION_SUCCESS, defaultState } from "./constants";
import { IActivate, ILoadUserActivateActionType, IObjectStringList } from "./types";

export const activatedReducer = (
    state: IActivate = defaultState,
    action: ILoadUserActivateActionType
): IActivate => {
    switch (action.type) {
        case ACTIVATION_SUCCESS:
            return {
                ...state,
                isActivated: true,
                errors: null,
            };
        case ACTIVATION_FAILED:
            return {
                ...state,
                isActivated: false,
                errors: action.payload as IObjectStringList,
            };
        default:
            return state;
    }
};