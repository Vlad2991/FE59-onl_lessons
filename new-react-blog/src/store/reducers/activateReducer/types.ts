import { IBaseActionType, IObjectStringList } from "../../../tools/types";

interface ILoadUserActivateActionType extends IBaseActionType {
    payload?: null | IObjectStringList;
}

interface IActivate {
    isActivated: boolean;
    errors: IObjectStringList | null;
}

export type { ILoadUserActivateActionType, IActivate, IObjectStringList };