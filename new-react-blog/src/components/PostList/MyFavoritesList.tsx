import { useSelector } from "react-redux";
import { favoritesPostsSelector } from "../../store/selectors/selectors";
import PostListView from "./PostListView";

const MyFavoritesList = () => {
    const posts = useSelector(favoritesPostsSelector);
    const favoritesPosts = posts

    return (
        <>
            <PostListView
                bottomPost={favoritesPosts}
                mainPost={[]}
                asidePost={[]}
            />
        </>
    )
}

export default MyFavoritesList