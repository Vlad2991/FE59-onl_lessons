import { IPost } from "../../../tools/types";
import { ADD_TO_FAVORITES, defaultState, DELETE_FROM_FAVORITES } from "./constants";
import { IFavoriteActionType, IFavoriteListState } from "./types";

const favoriteReducer = (state: IFavoriteListState = defaultState,action: IFavoriteActionType): IFavoriteListState => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favoritesPosts: [...state.favoritesPosts, action.payload as IPost],
            };
        case DELETE_FROM_FAVORITES:
            const filterPosts = state.favoritesPosts.filter(
                (post) => post.id !== action.payload
            );
            return {
                ...state,
                favoritesPosts: [...filterPosts],
            };
        default:
            return state;
    }
};

export default favoriteReducer