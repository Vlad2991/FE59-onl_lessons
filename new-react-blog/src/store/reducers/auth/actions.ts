import getTokensUser  from "../../../services/auth/auth";
import { fetchRefreshToken, getUser } from "../../../services/user/getUser";
import { IBaseActionType } from "../../../tools/types";
import { AppDispatch, AppState } from "../../store";
import { IUserType } from "../registerReducer/types";
import { GET_TOKEN_FAILED, GET_TOKEN_SUCCESS, GET_USER, SIGN_OUT } from "./constants";
import { AuthUserActionType, IObjectStringList, TokenDto } from "./types";

export const getTokensSuccessAction = (
    tokens: TokenDto
): AuthUserActionType => {
    return {
        type: GET_TOKEN_SUCCESS,
        payload: tokens,
    };
};

export const getTokensFailedAction = (
    errors: IObjectStringList
): AuthUserActionType => {
    return {
        type: GET_TOKEN_FAILED,
        payload: errors,
    };
};

export const getTokensAsyncAction = (email: string, password: string): any => {
    return async (dispatch: AppDispatch) => {
        const result = await getTokensUser(email, password);
        if (result.ok) {
            dispatch(getTokensSuccessAction(result.data));
        } else {
            dispatch(getTokensFailedAction(result.data));
        }
    };
};

export const refreshTokenAsyncAction = (): any => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const refreshToken = getState().auth.tokens?.refresh
        if (!refreshToken) {
            console.log('No refreshToken')
            throw new Error()
        }

        const result = await fetchRefreshToken(refreshToken)
        if (result.ok) {
            dispatch(getTokensSuccessAction({
                access: result.data.access,
                refresh: refreshToken
            }))
        }
    }
}

export const getUserAction = (user: IUserType) => {
    return {
        type: GET_USER,
        payload: user
    }
}

export const getUserAsyncAction = (email: string, password: string, cb: () => void): any => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        await dispatch(getTokensAsyncAction(email, password))
        const userData = getState().auth.user?.username
        let accessToken = getState().auth.tokens?.access
        let refreshToken = getState().auth.tokens?.refresh
        const errors = getState().auth.errors

        if (!refreshToken) {
            if (errors) {
                return
            }
            await dispatch(getTokensAsyncAction(email, password))
            await dispatch(getUserAsyncAction(email, password, cb))
        } else if (!accessToken) {
            await dispatch(refreshTokenAsyncAction())
            await dispatch(getUserAsyncAction(email, password, cb))
        } else if (userData === undefined) {
            const userInfo = await getUser(accessToken!)
            dispatch(getUserAction(userInfo.data))
            cb()
        }
    }
}

export const signOutAction = (): IBaseActionType => {
    return {
        type: SIGN_OUT
    }
}