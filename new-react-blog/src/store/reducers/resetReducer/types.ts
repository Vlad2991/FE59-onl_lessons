import { IBaseActionType, IObjectStringList } from "../../../tools/types";

export interface IResetPasswordAction extends IBaseActionType {
    payload?: null | IObjectStringList;
}
export interface IResetState {
    isReset: boolean;
    errors: IObjectStringList | null;
}
