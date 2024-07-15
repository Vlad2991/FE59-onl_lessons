import { IPost } from "../../../tools/types";
import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "./constants";

const addToFavoritesPostsAction = (post: IPost) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: post,
    };
};
const deleteFromFavoritesPostsAction = (id: number) => {
    return {
        type: DELETE_FROM_FAVORITES,
        payload: id,
    };
};

export {
    addToFavoritesPostsAction,
    deleteFromFavoritesPostsAction,
};