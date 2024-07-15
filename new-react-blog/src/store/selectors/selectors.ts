import { AppState } from "../store"

export const authSelector = (state: AppState) => state.auth
export const userSelector = (state: AppState) => state.auth.user
export const getBurgerStateSelector = (state: AppState) => state.burger
export const getThemeSelector = (state: any) => state.theme
export const favoritesPostsSelector = (state: AppState) => state.favoriteList.favoritesPosts;
export const getPopupStateSelector = (state: AppState) => state.popup
export const currentPageSelector = (state: AppState) => state.pagination.currentPage;
export const pageSizeSelector = (state: AppState) => state.postList.pageSize;
export const totalPostsCountSelector = (state: AppState) => state.postList.totalPostsCount;
export const postsSelector = (state: AppState) => state.postList.posts;
export const myPostsSelector = (state: AppState) => state.myPosts.myPosts
export const myPostsCountSelector = (state: AppState) => state.myPosts.totalMyPostsCount
export const activeTabSelector = (state: AppState) => state.tabs.activeTab;
export const getSearchStateSelector = (state: AppState) => state.search
export const totalFavoritesPostsCountSelector = (state: AppState) => state.favoriteList.favoritesPosts.length
export const tabsSelector = (state: AppState) => state.tabs.tabs;
export const activateSelector = (state: AppState) => state.activate
export const searchPostsSelector = (state: AppState) => state.searchPostsList.searchPosts;
export const totalSearchPostsCountSelector = (state: AppState) => state.searchPostsList.totalSearchPostsCount;
export const registerSelector = (state: AppState) => state.register