import { IBaseActionType } from "../../../tools/types"

export interface IPopupState {
    isOpen: boolean
    image?: string
}

export interface IPopupAction extends IBaseActionType {
    image?: string
}

