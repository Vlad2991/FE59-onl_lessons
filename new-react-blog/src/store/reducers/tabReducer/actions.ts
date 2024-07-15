import { SET_ACTIVE_TAB } from "./constants";
import { ActiveTabType, ISetActiveTabAction } from "./types";

const setActiveTabAction = (activeTab: ActiveTabType): ISetActiveTabAction => {
    return {
        type: SET_ACTIVE_TAB,
        activeTab,
    };
};

export { setActiveTabAction };