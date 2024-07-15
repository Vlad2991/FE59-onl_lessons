import { activateUser } from "../../../services/registerService/registerService";
import { AppDispatch } from "../../store";
import { ILoadUserActivateActionType, IObjectStringList } from "./types";

export const activationSuccessAction = (): ILoadUserActivateActionType => {
    return { type: "ACTIVATION_SUCCESS" };
};

export const activationFailedAction = (
    errors: IObjectStringList
): ILoadUserActivateActionType => {
    return { type: "ACTIVATION_FAILED", payload: errors };
};

export const activateUserAsyncAction = (
    uid: string,
    token: string,
    cb: () => void
): any => {
    return async (dispatch: AppDispatch) => {
        const result = await activateUser(uid, token);
        if (result.ok) {
            dispatch(activationSuccessAction());
            cb();
        } else {
            dispatch(activationFailedAction(result.data));
        }
    };
};
