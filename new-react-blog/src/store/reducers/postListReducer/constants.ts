import { IPostsListState } from "./types";

const LOAD_POSTS = "LOAD_POSTS";
const GET_OVERALL_POSTS_COUNT = "GET_OVERALL_POSTS_COUNT";
const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
const defaultState: IPostsListState = {
    posts: [],
    totalPostsCount: 0,
    pageSize: 12,
};

export { LOAD_POSTS, defaultState, GET_OVERALL_POSTS_COUNT, ADD_TO_FAVOURITES };