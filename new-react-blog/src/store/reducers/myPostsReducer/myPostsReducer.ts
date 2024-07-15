import { IObjectStringList, IPost } from "../../../tools/types";
import { ADD_MY_POSTS_COUNT, ADD_MY_POSTS_FAILED, ADD_MY_POSTS_SUCCESS, defaultState } from "./constants";
import { AddPostActionType, MyPostStateType } from "./types";

const myPostsReducer = (state: MyPostStateType = defaultState, action: AddPostActionType): MyPostStateType => {
    switch (action.type) {
        case ADD_MY_POSTS_SUCCESS: return {
            myPosts: action.payload as IPost[],
            errors: null
        }
        case ADD_MY_POSTS_FAILED: return {
            myPosts: null,
            errors: action.payload as IObjectStringList
        }
        case ADD_MY_POSTS_COUNT: return {
            ...state,
            totalMyPostsCount: action.payload as number
        }
        default: return state
    }
}

export default myPostsReducer