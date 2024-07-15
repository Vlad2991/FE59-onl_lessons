import { CLOSE_POPUP, defaultValue, OPEN_POPUP } from "./constants"
import { IPopupAction, IPopupState } from "./types"

const popupReducer = (state: IPopupState = defaultValue, action: IPopupAction): IPopupState => {
    switch (action.type) {
        case OPEN_POPUP:
            return {
                ...state,
                isOpen: true,
                image: action.image
            }
        case CLOSE_POPUP:
            return {
                ...state,
                isOpen: false
            }
        default:
            return state
    }
}

export default popupReducer
