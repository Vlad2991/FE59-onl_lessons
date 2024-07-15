import { defaultState, SET_ACTIVE_TAB } from "./constants";
import { IDefaultState, ISetActiveTabAction } from "./types";

const tabReducer = (
    state: IDefaultState = defaultState,
    action: ISetActiveTabAction
): IDefaultState => {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.activeTab,
            };

        default:
            return state;
    }
};

export default tabReducer;