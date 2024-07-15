import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getThemeSelector } from '../../store/selectors/selectors'
import styles from './Navigation.module.scss'

interface Props {
    text: string
    backToHome: string
    className?: string
}

export const Navigation = (props: Props) => {
    const { text, backToHome, className } = props
    const theme = useSelector(getThemeSelector)

    return (
        <div className={`${styles.navigation} ${className}`}>
            <NavLink style={theme} to={'/'}>{backToHome}</NavLink>
            <h1>{text}</h1>
        </div>)
}