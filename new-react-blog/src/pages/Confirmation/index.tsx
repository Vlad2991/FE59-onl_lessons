import { useLocation, useNavigate } from "react-router-dom"
import { Navigation } from "../../components/Navigaton"
import { Submit } from "../../components/Submit"
import styles from './Confirmation.module.scss'

export const Confirmation = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const email = location.state
    const handleGoToHome = () => {
        navigate('/')
    }

    return (
        <>
            <Navigation backToHome='Back to home' text='Registration Confirmation' />
            <form className={styles.formwrapper}>
                <div>
                    <p>Please activate your account with the activation
                        link in the email <b>{email}</b>.
                        <br />
                        Please, check your email
                    </p>
                </div>
                <Submit value="Go to home" onClick={handleGoToHome} />
            </form>
        </>
    )
}