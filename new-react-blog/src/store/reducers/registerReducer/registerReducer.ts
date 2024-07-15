import {
    ACTIVATION_FAILED,
    ACTIVATION_SUCCESS,
    defaultState,
    REGISTRATION_FAILED,
    REGISTRATION_SUCCESS,
} from "./constants";
import {
    IRegisterState,
    ILoadUserRegisterActionType,
    IUserType,
    IObjectStringList,
} from "./types";

const registerReducer = (
    state: IRegisterState = defaultState,
    action: ILoadUserRegisterActionType
): IRegisterState => {
    switch (action.type) {
        case REGISTRATION_SUCCESS:
            const loadUser = action.payload as IUserType;
            return {
                ...state,
                isRegistered: true,
                user: loadUser,
                errors: undefined,
            };
        case REGISTRATION_FAILED:
            const errors = action.payload as IObjectStringList;
            return {
                ...state,
                isRegistered: false,
                user: undefined,
                errors: errors,
            };
        case ACTIVATION_SUCCESS:
            return {
                ...state,
                isActivated: true,
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


export default registerReducer