import { Navigation } from "../../components/Navigaton"
import { Tabs } from "../../components/Tabs"
import PostList from "../../components/PostList"
import { useSelector } from "react-redux"
import MyFavoritesList from "../../components/PostList/MyFavoritesList"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadPostListAsyncAction, loadTotalPostsCountAsyncAction } from "../../store/reducers/postListReducer/postListAction"
import { LoadSpinner } from "../../components/loadSpinner"
import MyPostsList from "../../components/PostList/MyPostsList"
import { activeTabSelector, postsSelector, totalPostsCountSelector } from "../../store/selectors/selectors"

export const Main = () => {
    const dispatch = useDispatch()
    const activeTab = useSelector(activeTabSelector);
    const posts = useSelector(postsSelector);
    const total = useSelector(totalPostsCountSelector)

    useEffect(() => {
        dispatch(loadTotalPostsCountAsyncAction())
    }, [dispatch])

    useEffect(() => {
        dispatch(loadPostListAsyncAction(total, 0))
    }, [dispatch, total])

    if (!posts.length) {
        return <LoadSpinner />
    }

    return (
        <section>
            <Navigation text="Blog" backToHome="" />
            <Tabs activeTab1={activeTab} />
            {activeTab === 'All' && <PostList />}
            {activeTab === 'My Favorites' && <MyFavoritesList />}
            {activeTab === 'My Posts' && <MyPostsList />}
        </section>
    )
}
