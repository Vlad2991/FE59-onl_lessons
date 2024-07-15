import { ISearchPostsListState } from "./types";

const LOAD_SEARCH_POSTS = "LOAD_SEARCH_POSTS";
const GET_OVERALL_SEARCH_POSTS_COUNT = "GET_OVERALL_SEARCH_POSTS_COUNT";
const defaultState: ISearchPostsListState = {
  searchPosts: [],
  totalSearchPostsCount: 1,
  pageSize: 10,
};

export { defaultState, LOAD_SEARCH_POSTS, GET_OVERALL_SEARCH_POSTS_COUNT };