import { combineReducers } from "redux";
import burgerMenuReducer from "./reducers/burgerMenuReducer/burgerMenuReducer";
import { paginationReducer } from "./reducers/paginationReducer/paginationReducer";
import popupReducer from "./reducers/popUpReducer/popUpReducer";
import postListReducer from "./reducers/postListReducer/postListReducer";
import searchToggleReducer from "./reducers/searchToggleReducer/searchToggleReducer";
import tabReducer from "./reducers/tabReducer/tabReducer";
import themeReduser from "./reducers/themeReducer/themeReducer";
import registerReducer from './reducers/registerReducer/registerReducer'
import { authReducer } from "./reducers/auth/authReducer";
import { activatedReducer } from "./reducers/activateReducer/activateReducer";
import searchPostsListReducer from "./reducers/searchPostReducer/searchPostReducer";
import favoriteReducer from "./reducers/favoriteReducer/favoriteReducer";
import myPostsReducer from "./reducers/myPostsReducer/myPostsReducer";


export const rootReducer = combineReducers({
    popup: popupReducer,
    theme: themeReduser,
    burger: burgerMenuReducer,
    search: searchToggleReducer,
    postList: postListReducer,
    pagination: paginationReducer,
    tabs: tabReducer,
    register: registerReducer,
    auth: authReducer,
    activate: activatedReducer,
    searchPostsList: searchPostsListReducer,
    favoriteList: favoriteReducer,
    myPosts: myPostsReducer
})