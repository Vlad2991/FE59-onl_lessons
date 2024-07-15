import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPostsAsyncAction } from "../../store/reducers/myPostsReducer/actions";
import { myPostsCountSelector, myPostsSelector } from "../../store/selectors/selectors";
import { AppState } from "../../store/store";
import { Pagination } from "../Pagination";
import PostListView from "./PostListView";

const currentPageSelector = (state: AppState) => state.pagination.currentPage;
const MyPostsList = () => {
    const dispatch = useDispatch()
    const myPosts = useSelector(myPostsSelector);
    const postsCount = useSelector(myPostsCountSelector)
    const currentPage = useSelector(currentPageSelector);
    const take = 4;
    const skip = take * currentPage - 4;

    useEffect(() => {
        dispatch(getMyPostsAsyncAction(take, skip));
    }, [dispatch, postsCount, skip]);

    return (<>
        <PostListView
            bottomPost={myPosts!}
            mainPost={[]}
            asidePost={[]}
        />
        <Pagination
            postsPerPage={take}
            totalPostsCount={postsCount!}
        />
    </>
    )
}
export default MyPostsList