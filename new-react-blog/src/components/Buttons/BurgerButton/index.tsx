import { useDispatch } from 'react-redux'
import { burgerMenuAction } from '../../../store/reducers/burgerMenuReducer/actions'
import styles from './BurgerButton.module.scss'


export const BurgerButton = () => {
    const dispatch = useDispatch()
    const handleShowBurger = () => { dispatch(burgerMenuAction()) }

    return (
        <button onClick={handleShowBurger} className={styles.button}  >
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
        </button>
    )
}