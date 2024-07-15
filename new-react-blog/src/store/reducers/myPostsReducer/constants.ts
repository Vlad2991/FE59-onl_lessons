import { MyPostStateType } from "./types"

export const ADD_MY_POSTS_SUCCESS = "ADD_MY_POSTS_SUCCESS"
export const ADD_MY_POSTS_FAILED = "ADD_MY_POSTS_FAILED"
export const ADD_MY_POSTS_COUNT = "ADD_MY_POSTS_COUNT"
export const defaultState: MyPostStateType = {
    myPosts: [],
    errors: null,
    totalMyPostsCount: 0,
}