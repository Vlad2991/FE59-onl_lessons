import { useDispatch, useSelector } from 'react-redux'
import { deleteMyPostAsyncAction, getMyPostsAsyncAction } from '../../../../store/reducers/myPostsReducer/actions'
import { activeTabSelector, currentPageSelector } from '../../../../store/selectors/selectors'
import styles from './styles.module.scss'

interface IProps {
    active: boolean
    id: number
}

export const DropDownMenu = (props: IProps) => {
    const currentPage = useSelector(currentPageSelector);
    const activeTab = useSelector(activeTabSelector);
    const take = 4;
    const skip = take * currentPage - 4;
    const { active, id } = props
    const dispatch = useDispatch()
    const handleDelete = async () => {
        await dispatch(deleteMyPostAsyncAction(id))
        await dispatch(getMyPostsAsyncAction(take, skip))
    }

    return (
        <div className={active === true && activeTab === 'My Posts' ? `${styles.active}` : `${styles.disable}`}>
            <button onClick={handleDelete}>Delete Post</button>
        </div>
    )
}