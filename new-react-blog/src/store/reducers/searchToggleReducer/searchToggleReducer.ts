import { defaultValue, TOGGLE_SEARCH } from "./constants"
import { ISearchAction, ISearchState } from "./types"

const burgerMenuReducer = (state: ISearchState = defaultValue, action: ISearchAction): ISearchState => {
    switch (action.type) {
        case TOGGLE_SEARCH:
            return {
                isOpen: !state.isOpen
            }
        default:
            return state
    }
}

export default burgerMenuReducer