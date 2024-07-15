import styles from './BurgerMenu.module.scss'
import { UserButton } from '../Buttons/UserButton'
import { LightBtn } from '../Buttons/ThemeButtons/Light'
import { DarkBtn } from '../Buttons/ThemeButtons/Dark'
import { NavLink } from 'react-router-dom'
import AsideMenuButton from '../Buttons/LogInLogOutButton'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCurrentPageAction } from '../../store/reducers/paginationReducer/actions'
import { getBurgerStateSelector, userSelector } from '../../store/selectors/selectors'

export const BurgerMenu = () => {
    const user = useSelector(userSelector)
    const burgerState = useSelector(getBurgerStateSelector)
    const dispatch = useDispatch()
    const gotoPage = () => {
        dispatch(setCurrentPageAction(1));
    }

    return (
        <div className={burgerState.isOpen ? `${styles.BurgerMenu} ${styles.active1}` : `${styles.BurgerMenu}`}>
            <div className={styles.content}>
                <div className={styles.header}>
                    {!user ? null : <UserButton />}
                </div>
                <ul className={styles.ul}>
                    <li onClick={gotoPage}><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/addPost'>Add Post</NavLink></li>
                </ul>
                <div className={styles.ThemeWrapper}>
                    <div className={styles.DayWrapper}>
                        <LightBtn />
                    </div>
                    <div className={styles.NightWrapper}>
                        <DarkBtn />
                    </div>
                </div>
                <div className={styles.LogOut}>
                    {user ? (
                        <AsideMenuButton value="Log out" />
                    ) : (
                        <AsideMenuButton value="Log in" navigationAdress="signin" />
                    )}
                </div>
            </div>
        </div>
    )
}