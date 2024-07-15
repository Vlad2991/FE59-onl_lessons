import style from './SearchPost.module.scss'
import { PostButtons } from '../Buttons/PostButtons'
import { useDispatch } from 'react-redux'
import { popUpOpenAction } from '../../store/reducers/popUpReducer/actions'
import { IPost } from '../../tools/types'
export const SearchPost = (props: {post: IPost}) => {
    const { post:{date, title, image}, post } = props
    const dispatch = useDispatch()
    const handleShowPopup = () => {
        dispatch(popUpOpenAction(image))
    }

    return (<div className={style.post}>
        <div className={style.container}>
            <img className={style.image} src={image} alt='123' onClick={handleShowPopup}></img>
            <div className={style.titlewrapper}>
                <p className={style.date}>{date}</p>
                <p className={style.title}>{title} </p>
            </div>
        </div>
        <PostButtons post={post} likes={post.likes} dislikes={post.dislikes} />
    </div>)
}