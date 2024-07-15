import {
    defaultState,
    SET_CURRENT_PAGE,
    SET_LAST_PAGE,
    SET_NEXT_PAGE,
    SET_PREVIOUSLY_PAGE,
} from "./constants";
import { IDefaultState } from "./types";

export const paginationReducer = (
    state = defaultState,
    action: any
): IDefaultState => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_PREVIOUSLY_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage - 1,
            };
        }
        case SET_NEXT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage + 1,
            };
        }
        case SET_LAST_PAGE:
            return {
                ...state,
                lastPage: action.lastPage,
            };
        default:
            return state;
    }
};