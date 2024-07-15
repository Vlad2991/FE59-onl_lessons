import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostListAsyncAction } from "../../store/reducers/postListReducer/postListAction";
import {
    currentPageSelector,
    pageSizeSelector,
    postsSelector,
    totalPostsCountSelector
} from "../../store/selectors/selectors";
import { Pagination } from "../Pagination";
import PostlistView from "./PostListView";

const PostList = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(currentPageSelector);
    const postsPerPage = useSelector(pageSizeSelector);
    const posts = useSelector(postsSelector);
    const totalPostsCount = useSelector(totalPostsCountSelector);

    const take = currentPage === 1 ? postsPerPage - 1 : postsPerPage;
    const skip = currentPage === 1 ? 0 : take * currentPage - 13
    useEffect(() => {
        dispatch(loadPostListAsyncAction(take, skip));
    }, [take, skip, dispatch]);

    const mainPost = currentPage === 1 ? posts.slice(0, 1) : [];
    const bottomPost =
        currentPage === 1 ? posts.slice(1, 5) : posts.slice(0, 6);
    const asidePost =
        currentPage === 1 ? posts.slice(5, 11) : posts.slice(6, 12);

    return (
        <>
            <PostlistView
                mainPost={mainPost}
                bottomPost={bottomPost}
                asidePost={asidePost}
            />
            <Pagination
                postsPerPage={postsPerPage}
                totalPostsCount={totalPostsCount}
            />
        </>
    )
}


export default PostList