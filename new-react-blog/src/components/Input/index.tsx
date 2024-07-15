import { useSelector } from 'react-redux'
import { getThemeSelector } from '../../store/selectors/selectors'
import styles from './Input.module.scss'

interface InputProps {
    type: string
    label: string
    placeholder: string
    name: string
    value?: any
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    isRequired?: boolean
}

export const Input = (props: InputProps) => {
    const { label, type, placeholder, name, className } = props
    const theme = useSelector(getThemeSelector)

    return (
        <div className={`${styles.container} ${className}`}>
            <span className={styles.text} style={theme}>{label}</span>
            <input
                onChange={() => { }}
                type={type}
                name={name}
                className={`${styles.input}`}
                placeholder={placeholder}
            />
        </div>
    )
}