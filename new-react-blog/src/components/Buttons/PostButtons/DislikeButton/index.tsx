import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getThemeSelector } from '../../../../store/selectors/selectors'
import styles from './styles.module.scss'

const DislikeButton = () => {
    const theme = useSelector(getThemeSelector)
    const [dislikeActive, setDislikeActive] = useState<boolean>(false)
    const [dislikeCount, setDislikeCount] = useState<number>(Math.floor(Math.random() * 50))
    const DislikeCount = () => {
        if (!dislikeActive) {
            setDislikeCount(dislikeCount + 1)
        }
        else {
            setDislikeCount(dislikeCount - 1)
        }
        setDislikeActive(prev1 => !prev1)
    }

    return (<>
        <button className={`${styles.DislikeButton} ${dislikeActive ? `${styles.dislikeActive}` : ''}`} onClick={DislikeCount}>
            <svg style={theme} width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3663 10.4239C20.2533 11.0519 19.6963 11.5129 19.0363 11.5009H17.3663V2.50088H19.0543C19.6963 2.45188 20.2523 2.94788 20.3663 3.57688V10.4239ZM15.3663 12.2879L11.7583 20.4059C10.9513 20.1479 10.3663 19.3909 10.3663 18.5009V14.5009C10.3663 13.9479 9.91829 13.5009 9.36629 13.5009H3.69729C3.65129 13.4979 3.59029 13.4989 3.53329 13.4899C2.98829 13.4069 2.61229 12.8959 2.69429 12.3519L4.07529 3.35088C4.14929 2.86088 4.60129 2.52188 5.08629 2.50088H15.3663V12.2879ZM22.3573 3.36588C22.1353 1.72288 20.7303 0.499878 19.0943 0.499878C19.0753 0.499878 19.0553 0.499878 19.0363 0.500878H5.09729C3.61029 0.510878 2.32029 1.58088 2.09829 3.04888L0.717287 12.0509C0.470287 13.6859 1.59829 15.2179 3.23029 15.4659C3.39029 15.4909 3.55329 15.5029 3.70629 15.5009H8.36629V18.5009C8.36629 20.7069 10.1603 22.5009 12.3663 22.5009C12.7623 22.5009 13.1193 22.2679 13.2803 21.9069L17.0153 13.5009H19.0183C20.6883 13.5059 22.1323 12.2979 22.3573 10.6349C22.3633 10.5909 22.3663 10.5459 22.3663 10.5009V3.50088C22.3663 3.45588 22.3633 3.41088 22.3573 3.36588Z"
                    fill={dislikeActive ? `${"#ff0000"}` : `${theme.color === '#313037' ? '#313037' : '#FFFFFF'}`}
                />
            </svg>
        </button>
        <div className={styles.dislikeCounter}>{dislikeCount}</div>
    </>)
}

export default DislikeButton