import { IDefaultState } from "./types";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_LAST_PAGE = "SET_LAST_PAGE";
const SET_PREVIOUSLY_PAGE = "SET_PREVIOUSLY_PAGE";
const SET_NEXT_PAGE = "SET_NEXT_PAGE";
const defaultState: IDefaultState = {
  firstPage: 1,
  currentPage: 1,
  lastPage: 1,
};

export {
  defaultState,
  SET_LAST_PAGE,
  SET_CURRENT_PAGE,
  SET_PREVIOUSLY_PAGE,
  SET_NEXT_PAGE,
};