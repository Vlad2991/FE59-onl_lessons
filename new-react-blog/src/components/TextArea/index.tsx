import { useSelector } from 'react-redux'
import { getThemeSelector } from '../../store/selectors/selectors'
import styles from './TextArea.module.scss'

interface IProps {
    label: string
    placeholder: string
    className?: string
    name: string
}

const TextArea = (props: IProps) => {
    const { label, placeholder, className, name } = props
    const theme = useSelector(getThemeSelector)

    return (
        <>
            <span className={styles.label} style={theme}>{label}</span>
            <textarea name={name} className={`${styles.textarea} ${className}`} placeholder={placeholder}></textarea>
        </>
    )
}
export default TextArea