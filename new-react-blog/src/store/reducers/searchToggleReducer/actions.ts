import { TOGGLE_SEARCH } from "./constants";
import { ISearchAction } from "./types";

export const ToggleSearchAction = (): ISearchAction => {
    return {
        type: TOGGLE_SEARCH,
    };
};