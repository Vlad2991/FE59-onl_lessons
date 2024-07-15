import {
    defaultState,
    GET_OVERALL_SEARCH_POSTS_COUNT,
    LOAD_SEARCH_POSTS,
  } from "./constants";
  import { ISearchPostsListState } from "./types";
  
  const searchPostsListReducer = (
    state: ISearchPostsListState = defaultState,
    action: any
  ): ISearchPostsListState => {
    switch (action.type) {
      case LOAD_SEARCH_POSTS:
        return {
          ...state,
          searchPosts: [...action.posts],
        };
      case GET_OVERALL_SEARCH_POSTS_COUNT:
        return {
          ...state,
          totalSearchPostsCount: action.totalSearchPostsCount,
        };
  
      default:
        return state;
    }
  };
  
  export default searchPostsListReducer;