import { Link } from 'react-router-dom'
import { PostButtons } from '../../Buttons/PostButtons'
import style from './BottomPostItem.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { popUpOpenAction } from '../../../store/reducers/popUpReducer/actions'
import { getThemeSelector } from '../../../store/selectors/selectors'
import { IPost } from '../../../tools/types'

export const BottomPostItem = (props: { post: IPost }) => {
    const { post: { image, date, title, id }, post } = props
    const theme = useSelector(getThemeSelector)
    const dispatch = useDispatch()
    const handleShowPopup = () => {dispatch(popUpOpenAction(image))}

    return (<div className={style.post}>
        <img className={style.image} src={image} alt='123' onClick={handleShowPopup}></img>
        <Link to={`post/${id}`}>
            <div className={style.titlewrapper}>
                <p className={style.date}>{date}</p>
                <p className={style.title} style={theme}>{title} </p>
            </div>
        </Link>
        <PostButtons post={post} likes={post.likes} dislikes={post.dislikes} />
    </div>)
}