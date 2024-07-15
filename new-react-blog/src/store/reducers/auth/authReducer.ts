import { IUserType } from "../registerReducer/types";
import { defaultState, GET_TOKEN_FAILED, GET_TOKEN_SUCCESS, GET_USER, SIGN_OUT } from "./constants";
import { AuthUserActionType, IObjectStringList, IState, TokenDto } from "./types";

export const authReducer = (state: IState = defaultState, action: AuthUserActionType): IState => {
    switch (action.type) {
        case GET_TOKEN_SUCCESS: {
            return {
                ...state,
                tokens: action.payload as TokenDto,
                errors: null,
            };
        }
        case GET_TOKEN_FAILED: {
            return {
                ...state,
                tokens: null,
                errors: action.payload as IObjectStringList,
            };
        }
        case GET_USER: {
            return {
                ...state,
                user: action.payload as IUserType,
            }
        }
        case SIGN_OUT: {
            return {
                ...state,
                tokens: null,
                errors: null,
                user: null,
            }
        }
        default:
            return state;
    }
};