import { AnyAction } from "@reduxjs/toolkit";
import { IPost } from "../../../tools/types";

export interface IPostsListState {
    posts: IPost[]
    totalPostsCount: number;
    pageSize: number;
}
export interface IPostListAction extends AnyAction {
    type: string;
    posts: IPost[]
}