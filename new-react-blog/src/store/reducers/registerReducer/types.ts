import { IBaseActionType, IObjectStringList } from "../../../tools/types";

interface ILoadUserRegisterActionType extends IBaseActionType {
    payload: IUserType | IObjectStringList 
}

interface IUserType {
    username: string;
    email: string;
    id: number;
}

interface IRegisterState {
    isRegistered: boolean;
    user?: IUserType;
    errors?: IObjectStringList;
    isActivated: boolean;
}

export type {
    ILoadUserRegisterActionType,
    IUserType,
    IRegisterState,
    IObjectStringList,
};