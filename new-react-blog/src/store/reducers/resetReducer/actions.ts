
import { fetchNewPassword } from "../../../services/user/getUser";
import { IObjectStringList } from "../../../tools/types";
import { AppDispatch } from "../../store";
import { RESET_FAILED, RESET_SUCCESS } from "./constants";
import { IResetPasswordAction } from "./types";

export const ResetSuccessAction = (): IResetPasswordAction => {
    return { type: RESET_SUCCESS };
};

export const ResetFailedAction = (
    errors: IObjectStringList
): IResetPasswordAction => {
    return { type: RESET_FAILED, payload: errors };
};

export const resetPasswordAsyncAction = (
    uid: string,
    token: string,
    new_password: string,
    cb: () => void
): any => {
    return async (dispatch: AppDispatch) => {
        const result = await fetchNewPassword(uid, token, new_password);
        if (result.ok) {
            dispatch(ResetSuccessAction());
            cb();
        } else { return }
    };
};
