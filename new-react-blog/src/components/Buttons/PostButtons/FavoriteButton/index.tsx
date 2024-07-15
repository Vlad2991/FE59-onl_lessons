import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoritesPostsAction, deleteFromFavoritesPostsAction } from "../../../../store/reducers/favoriteReducer/actions";
import { favoritesPostsSelector, getThemeSelector, userSelector } from "../../../../store/selectors/selectors";
import { IPost } from "../../../../tools/types";
import { DropDownMenu } from "../DropDownMenu/DropDownMenu";
import styles from './styles.module.scss'

const FavoriteButton = (props: { post: IPost }) => {
    const [toggleDropDown, setToggleDropDown] = useState(false)
    const dispatch = useDispatch();
    const [signValidation, setSignValidation] = useState('')
    const { post } = props;
    const favoritePosts = useSelector(favoritesPostsSelector);
    const id = post.id;
    const user = useSelector(userSelector)
    const theme = useSelector(getThemeSelector)
    const isFavoritePost = (favoritePostId: number) => {
        return favoritePosts.find((post) => post.id === favoritePostId);
    };
    const toggleFavoritesPosts = (post: IPost) => {
        if (user) {
            if (!isFavoritePost(id)) {
                dispatch(addToFavoritesPostsAction(post));
            } else {
                dispatch(deleteFromFavoritesPostsAction(id));
            }
        } else { setSignValidation('You need to SignIn') }
    };

    return (
        <div className={styles.container}>
            <span className={styles.errors}>{signValidation}</span>
            <button onClick={() => toggleFavoritesPosts(post)} className={styles.favoriteButton}  >
                <svg width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 15C12.204 15 12.407 15.062 12.581 15.187L18 19.057V5C18 4.449 17.552 4 17 4H7C6.449 4 6 4.449 6 5V19.057L11.419 15.187C11.593 15.062 11.796 15 12 15ZM19 22C18.795 22 18.592 21.937 18.419 21.813L12 17.229L5.581 21.813C5.277 22.032 4.875 22.062 4.542 21.89C4.209 21.718 4 21.375 4 21V5C4 3.346 5.346 2 7 2H17C18.654 2 20 3.346 20 5V21C20 21.375 19.791 21.718 19.458 21.89C19.313 21.963 19.156 22 19 22Z"
                        fill={!!isFavoritePost(id) ? `${"#5360CD"}` : `${theme.color === '#313037' ? '#313037' : '#FFFFFF'}`}
                    />
                </svg>
            </button>
            <button onClick={() => { setToggleDropDown(!toggleDropDown) }} >
                <svg width="20"
                    height="4"
                    viewBox="0 0 20 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 2C0 3.10267 0.897333 4 2 4C3.10267 4 4 3.10267 4 2C4 0.897333 3.10267 0 2 0C0.897333 0 0 0.897333 0 2ZM10 4C8.89733 4 8 3.10267 8 2C8 0.897333 8.89733 0 10 0C11.1027 0 12 0.897333 12 2C12 3.10267 11.1027 4 10 4ZM18 4C16.8973 4 16 3.10267 16 2C16 0.897333 16.8973 0 18 0C19.1027 0 20 0.897333 20 2C20 3.10267 19.1027 4 18 4Z"
                        fill={theme.color === '#313037' ? '#313037' : '#FFFFFF'}
                    />
                </svg>
            </button>
            <DropDownMenu active={toggleDropDown} id={post.id} />
        </div>
    )
}

export default FavoriteButton