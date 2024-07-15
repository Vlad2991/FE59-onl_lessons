import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentPageAction } from '../../store/reducers/paginationReducer/actions';
import { getSearchStateSelector } from '../../store/selectors/selectors';
import styles from './SearchBar.module.scss'

export const SearchBar = () => {
    const dispatch = useDispatch();
    const searchState = useSelector(getSearchStateSelector)
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const onChange = (e: any) => {
        dispatch(setCurrentPageAction(1));
        setSearchText(e.target.value)
        navigate("/search", { state: e.target.value });
    }

    return (
        <div className={styles.wrapper}>
            <input type='search'
                className={searchState.isOpen ? `${styles.input} ${styles.active}` : `${styles.input}`}
                placeholder='Search...'
                value={searchText}
                onChange={onChange}
            />
        </div>
    )
}