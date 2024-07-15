import { useEffect } from "react"
import { SearchPost } from "../../components/SearchPost"
import styles from './Search.module.scss'
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { loadSearchPostsListAsyncAction, loadTotalSearchPostsCountAsyncAction } from "../../store/reducers/searchPostReducer/actions"
import { Pagination } from "../../components/Pagination"
import { currentPageSelector, getThemeSelector, searchPostsSelector, totalSearchPostsCountSelector } from "../../store/selectors/selectors"
import { IPost } from "../../tools/types"

export const Search = () => {
    const theme = useSelector(getThemeSelector)
    const location = useLocation();
    const searchText: string = location.state || "nothing";
    const dispatch = useDispatch()
    const currentPage = useSelector(currentPageSelector);
    const searchPostsList = useSelector(searchPostsSelector);
    const totalSearchPostsCount = useSelector(totalSearchPostsCountSelector);
    const take = 10;
    const skip = take * currentPage - 10;

    useEffect(() => {
        dispatch(loadSearchPostsListAsyncAction(searchText, skip));
        dispatch(loadTotalSearchPostsCountAsyncAction(searchText));
    }, [dispatch, searchText, skip]);

    if (!searchPostsList.length) {
        return (<div className={styles.container}>
            <p className={styles.notresult}>Not results</p>
        </div>
        )
    }

    return (
        <section>
            <input readOnly className={styles.input} style={theme} type='text' value={`Search result: ${searchText} `} />
            <div >
                {searchPostsList.map((el: IPost) => (
                    <SearchPost post={el} key={el.id} {...el} />
                ))}
                <Pagination postsPerPage={take} totalPostsCount={totalSearchPostsCount} />
            </div>
        </section>
    )
}