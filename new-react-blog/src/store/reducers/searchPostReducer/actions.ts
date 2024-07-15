import {
    getSearchPosts,
    getSearchPostsCount,
} from "../../../services/PostService";
import { IPost } from "../../../tools/types";
import { AppDispatch, AppState } from "../../store";
import { GET_OVERALL_SEARCH_POSTS_COUNT, LOAD_SEARCH_POSTS } from "./constants";
import {
    ISearchPostsListGetPostsAction,
    ISearchPostsListGetPostsCountAction,
} from "./types";

const loadSearchPostsListAction = (
    posts: IPost[]
): ISearchPostsListGetPostsAction => {
    return {
        type: LOAD_SEARCH_POSTS,
        posts,
    };
};

const loadSearchPostsListAsyncAction = (value: string, offset: number): any => {
    return (dispatch: AppDispatch) => {
        getSearchPosts(value, offset).then((posts) => {
            dispatch(loadSearchPostsListAction(posts));
        });
    };
};

const loadTotalSearchPostsCountAction = (
    totalSearchPostsCount: number
): ISearchPostsListGetPostsCountAction => {
    return {
        type: GET_OVERALL_SEARCH_POSTS_COUNT,
        totalSearchPostsCount,
    };
};

const loadTotalSearchPostsCountAsyncAction = (value: string): any => {
    return (dispatch: AppDispatch, state: AppState) => {
        getSearchPostsCount(value).then((totalPostsCount: number) =>
            dispatch(loadTotalSearchPostsCountAction(totalPostsCount))
        );
    };
};

export {
    loadSearchPostsListAction,
    loadSearchPostsListAsyncAction,
    loadTotalSearchPostsCountAction,
    loadTotalSearchPostsCountAsyncAction,
};