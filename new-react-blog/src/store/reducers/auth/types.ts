import { IObjectStringList, IPost } from "../../../tools/types";
import { IUserType } from "../registerReducer/types";

interface IState {
    tokens: TokenDto | null;
    errors: IObjectStringList | null;
    user: IUserType | null
}

interface TokenDto {
    access: string;
    refresh: string;
}

type AuthUserActionType = {
    type: string;
    payload: TokenDto | IObjectStringList | IUserType
};

export type { IObjectStringList, IState, TokenDto, AuthUserActionType }