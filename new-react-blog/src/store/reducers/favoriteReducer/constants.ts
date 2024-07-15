import { IFavoriteListState } from "./types";

const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const DELETE_FROM_FAVORITES = "DELETE_FROM_FAVORITES";
const defaultState: IFavoriteListState = {
    favoritesPosts: [],
};

export {
    ADD_TO_FAVORITES,
    DELETE_FROM_FAVORITES,
    defaultState,
};