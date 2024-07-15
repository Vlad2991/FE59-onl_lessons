import { useSelector } from "react-redux";

import { activeTabSelector, favoritesPostsSelector, myPostsCountSelector } from "../../store/selectors/selectors";
import { IPost } from "../../tools/types";
import { AsidePostItem } from "../PostItems/AsidePostItem";
import { BottomPostItem } from "../PostItems/BottomPostItem";
import { MainPostItem } from "../PostItems/MainPostItem";
import styles from './styles.module.scss'
interface IProps {
    mainPost: IPost[];
    bottomPost: IPost[];
    asidePost: IPost[];
}

const PostlistView = (props: IProps) => {
    const { mainPost, bottomPost, asidePost } = props
    let activeTab = useSelector(activeTabSelector);
    const favoritePosts = useSelector(favoritesPostsSelector);
    const myPostsCount = useSelector(myPostsCountSelector)

    if (!favoritePosts.length && activeTab === 'My Favorites') {
        return (<div className={styles.noposts}><p>No favorites Posts </p></div>)
    } else if (myPostsCount === 0 && activeTab === 'My Posts') {
        return (<div className={styles.noposts}><p>No My Posts </p></div>)
    } else {

        return (
            <div className={activeTab === 'All' ? `${styles.posts}` : `${styles.myfavposts1}`}>
                <div className={activeTab === 'All' ? `${styles.leftPosts}` : `${styles.myfavposts2}`}>
                    <div className={styles.mainPost}>
                        {mainPost.map((post: IPost) => (
                            <MainPostItem post={post} key={post.id} {...post} />
                        ))
                        }
                    </div>
                    <div className={activeTab === 'All' ? `${styles.bottomPosts}` : `${styles.myfavposts}`}>
                        {bottomPost.map((post: IPost) => (
                            <BottomPostItem post={post} key={post.id} {...post} />
                        ))}
                    </div></div>
                <aside className={styles.asidePosts}>
                    {asidePost.map((post: IPost) => (
                        <AsidePostItem post={post} key={post.id} {...post} />
                    ))}
                </aside>
            </div>
        )
    }
}

export default PostlistView