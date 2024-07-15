import {
    SET_CURRENT_PAGE,
    SET_LAST_PAGE,
    SET_NEXT_PAGE,
    SET_PREVIOUSLY_PAGE,
} from "./constants";

const setLastPageAction = (lastPage: number) => {
    return {
        type: SET_LAST_PAGE,
        lastPage,
    };
};

const setCurrentPageAction = (currentPage: number = 1) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    };
};

const setPreviouslyPage = (currentPage: number) => {
    return {
        type: SET_PREVIOUSLY_PAGE,
        currentPage,
    };
};

const setNextPage = (currentPage: number) => {
    return {
        type: SET_NEXT_PAGE,
        currentPage,
    };
};

export {
    setLastPageAction,
    setCurrentPageAction,
    setPreviouslyPage,
    setNextPage,
};