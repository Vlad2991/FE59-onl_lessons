import { Navigation } from '../../components/Navigaton'
import { Submit } from '../../components/Submit'
import styles from './Success.module.scss'

export const Success = () => {
    return (
        <>
            <Navigation text='Success' backToHome={'Back to Home'} />
            <form className={styles.Formwrapper}>
                <div>
                    <p>Email confirmed.</p>
                    <p>Your registration is completed.</p>
                </div>
                <Submit link={'/'} value={'Go to home'} onClick={() => { }} />
            </form>
        </>
    )
}