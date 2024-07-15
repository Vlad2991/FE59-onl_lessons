import { useSelector } from 'react-redux'
import styles from './PagesNav.module.scss'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPageAction, setNextPage, setPreviouslyPage } from '../../store/reducers/paginationReducer/actions';
import { currentPageSelector, getThemeSelector } from '../../store/selectors/selectors';

export const Pagination = (props: {
    postsPerPage: number;
    totalPostsCount: number;
}) => {
    const { totalPostsCount, postsPerPage } = props;
    const theme = useSelector(getThemeSelector)
    const dispatch = useDispatch()
    const currentPage = useSelector(currentPageSelector);
    const [pages, setPages] = useState<any[]>([1])
    const dots = '...'

    useEffect(() => {
        const totalPages = Math.floor(totalPostsCount / postsPerPage) + 1;
        let pageNumbers: any[] = []
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i)
        }
        let newPageList = []
        if (currentPage <= 3) {
            newPageList.push(...pageNumbers.slice(0, currentPage + 3))
        } else if (currentPage >= totalPages - 4) {
            newPageList.push(1, dots, ...pageNumbers.slice(currentPage - 3))
        } else
            newPageList.push(1, dots, ...pageNumbers.slice(currentPage - 3, currentPage + 2))

        if (currentPage + 2 < totalPages - 1) {
            newPageList.push(dots, totalPages)
        }
        setPages(newPageList)
    }, [currentPage, totalPostsCount, postsPerPage])

    const loadPreviousPage = (page: number) => {
        dispatch(setPreviouslyPage(page));
    };

    const handleCurrentPage = (e: any) => {
        const currentPage = e.currentTarget.textContent
        if (currentPage && currentPage !== '...') {
            dispatch(setCurrentPageAction(+currentPage))
        }
    }
    const loadNextPage = (page: number) => {
        dispatch(setNextPage(page));
    };

    if (!totalPostsCount) {
        return <></>
    }

    return (<div className={styles.PagesNavContainer}>
        <div className={styles.PrevPage}>
            <svg width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.70945 0.292384C7.89945 0.492383 7.99945 
                    0.742383 7.99945 1.00238C7.99945 1.26238 7.89945 
                    1.51238 7.70945 1.71238L3.40945 6.00238L16.9995 
                    6.00238C17.5495 6.00238 17.9995 6.45238 17.9995 
                    7.00238C17.9995 7.55238 17.5495 8.00238 16.9995 
                    8.00238L3.40945 8.00238L7.70945 12.2924C8.09945 
                    12.6824 8.09945 13.3224 7.70945 13.7124C7.31945 
                    14.1024 6.67945 14.1024 6.28945 13.7124L0.289453 
                    7.71238C0.199453 7.62238 0.129453 7.51238 0.0794534
                    7.39238C0.0594534 7.34238 0.0394534 7.30238 0.0394534
                    7.25238C-0.0105466 7.09238 -0.0105466 6.91238 0.0394534
                    6.75238C0.0394534 6.70238 0.0594534 6.66238 0.0794534 
                    6.61238C0.129453 6.49238 0.199453 6.38238 0.289453 
                    6.29238L6.28945 0.292383C6.67945 -0.0976169 7.31945 
                    -0.0976168 7.70945 0.292384Z"
                    fill="#8D8E97"
                />
            </svg>
            <button onClick={() => loadPreviousPage(currentPage)} disabled={currentPage === 1 ? true : false}>Prev</button>
        </div>
        <div className={styles.PagesNumber}>
            {pages.map((page, i) => {
                return (
                    <button
                        className={
                            currentPage === page ? `${styles.button} ${styles.active}` : `${styles.button}`
                        }
                        style={theme}
                        onClick={handleCurrentPage}
                        key={i}>
                        {page}
                    </button>)
            })}
        </div>
        <div className={styles.NextPage}>
            <button onClick={() => loadNextPage(currentPage)} disabled={currentPage === pages.length ? true : false}>Next</button>
            <svg width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.70945 0.292384C7.89945 0.492383 7.99945 0.742383 7.99945 1.00238C7.99945 1.26238 7.89945 1.51238 7.70945 1.71238L3.40945 6.00238L16.9995 6.00238C17.5495 6.00238 17.9995 6.45238 17.9995 7.00238C17.9995 7.55238 17.5495 8.00238 16.9995 8.00238L3.40945 8.00238L7.70945 12.2924C8.09945 12.6824 8.09945 13.3224 7.70945 13.7124C7.31945 14.1024 6.67945 14.1024 6.28945 13.7124L0.289453 7.71238C0.199453 7.62238 0.129453 7.51238 0.0794534 7.39238C0.0594534 7.34238 0.0394534 7.30238 0.0394534 7.25238C-0.0105466 7.09238 -0.0105466 6.91238 0.0394534 6.75238C0.0394534 6.70238 0.0594534 6.66238 0.0794534 6.61238C0.129453 6.49238 0.199453 6.38238 0.289453 6.29238L6.28945 0.292383C6.67945 -0.0976169 7.31945 -0.0976168 7.70945 0.292384Z"
                    fill="#8D8E97"
                />
            </svg>
        </div>
    </div>
    )
}
