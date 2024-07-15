import { defaultValue, TOGGLE_BURGER } from "./constants"
import { IBurgerAction, IBurgerState } from "./types"

const burgerMenuReducer = (state: IBurgerState = defaultValue, action: IBurgerAction): IBurgerState => {
    switch (action.type) {
        case TOGGLE_BURGER:
            return {
                isOpen: !state.isOpen
            }
        default:
            return state
    }
}

export default burgerMenuReducer