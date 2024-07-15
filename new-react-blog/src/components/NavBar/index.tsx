import { SearchBar } from '../SearchBar'
import { UserButton } from '../Buttons/UserButton'
import styles from './NavBar.module.scss'
import { BurgerButton } from '../Buttons/BurgerButton'
import { SearchButton } from '../Buttons/SearchButton'

export const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <BurgerButton />
            <div className={styles.wrapper}>
                <SearchBar />
                <SearchButton />
                <UserButton /></div>
        </nav>
    )
}