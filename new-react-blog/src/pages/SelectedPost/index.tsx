import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PostButtons } from "../../components/Buttons/PostButtons"
import { getPostById,  } from "../../services/PostService"
import styles from './SelectedPost.module.scss'
import { SelectedPostNav } from "../../components/SelectedPostNav"
import { useSelector } from "react-redux"
import { LoadSpinner } from "../../components/loadSpinner"
import { getThemeSelector } from "../../store/selectors/selectors"
import { IPost } from "../../tools/types"

export const SelectedPost = () => {
    const theme = useSelector(getThemeSelector)
    const params: any = useParams()
    const navigate = useNavigate()
    const [selectedPost, setSelectedPost] = useState<IPost>({} as IPost)
    const nextPage = () => {
        navigate(`/post/${Number(params.id) + 1}`)
    }
    const previousPage = () => {
        navigate(`post/${Number(params.id) - 1}`)
    }

    useEffect(() => {
        getPostById(params.id).then(post => { setSelectedPost(post) })
    }, [params.id])

    if (!selectedPost.image) {
        return (
            <LoadSpinner />
        )
    }
    const goHome = () => navigate('/')

    return (<section>
        <div className={styles.nav}>
            <a href="#!" style={theme} className={styles.link} onClick={goHome}>Home</a>
            <p className={styles.postid}>Post: {params.id}</p>
        </div>
        <div className={styles.selectedPost}>
            <div className={styles.post}>
                <p style={theme} className={styles.title}>{selectedPost.title} </p>
                <img className={styles.image} src={selectedPost.image} alt='123'></img>
                <p style={theme} className={styles.text}>{selectedPost.text}</p>
                <PostButtons post={selectedPost} likes={selectedPost.likes} dislikes={selectedPost.dislikes} />
            </div>
            <SelectedPostNav previousPage={previousPage} nextPage={nextPage} />
        </div>
    </section>)
}