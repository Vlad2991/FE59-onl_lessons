import Validator, { ValidationError } from 'fastest-validator'
import { FormEventHandler, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Navigation } from '../../components/Navigaton'
import { Submit } from '../../components/Submit'
import { getUserAsyncAction } from '../../store/reducers/auth/actions'
import { authSelector, getThemeSelector } from '../../store/selectors/selectors'
import styles from './SignIn.module.scss'

const signInValidationSchema = {
    email: {
        type: 'email',
        optional: true
    },
    password: {
        type: 'string',
        min: 8,
        max: 16,
        optional: true,
        nullable: true
    },

}

export const check = (schema: Object, data: Object) => {
    const validator = new Validator()
    const compiledValidator = validator.compile(schema)

    return compiledValidator(data)
}

export const SignIn = () => {
    const [formError, setFormError] = useState<ValidationError[]>([])
    const dispatch = useDispatch();
    const [apiErrors, setApiErrors] = useState('')
    const navigate = useNavigate()
    const auth = useSelector(authSelector);
    const theme = useSelector(getThemeSelector)
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e: any) => {
        e.preventDefault();
        const result = check(signInValidationSchema, {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        })

        if (result === true) {
            setFormError([])
            const email: string = e.currentTarget.email.value;
            const password: string = e.currentTarget.password.value;
            dispatch(getUserAsyncAction(email, password, () => navigate(fromPage)));
        } else { setFormError(result as ValidationError[]) }
    }

    useEffect(() => {
        for (const key in auth.errors) {
            if (auth.errors === null) {
                setApiErrors(apiErrors)

            } else {
                const errors: any = (auth.errors[key])
                setApiErrors(errors)
            }
        }
    }, [auth.errors, apiErrors])

    return (
        <>
            <Navigation backToHome='Back to home' text={'Sign In'} />
            <form className={styles.Formwrapper} onSubmit={handleSubmit}>
                <span className={styles.errors}> {apiErrors}</span>
                <Input
                    type='email'
                    label='Email'
                    placeholder='Your Email'
                    name={'email'}
                />
                {formError.map(err => (
                    <span key={err.field} className={styles.errors}>{err.field === 'email' ? err.message : ''}</span>
                ))}
                <Input
                    type='password'
                    label='Password'
                    placeholder='Your password'
                    name='password'
                />
                {formError.map(err => (
                    <span key={err.field} className={styles.errors}>{err.field === 'password' ? err.message : ''}</span>
                ))}
                <NavLink className={styles.passwordtext} style={theme} to={'/reset'}>Forgot password?</NavLink>
                <Submit value='Sign in' />
                <p>Don't have an account? <NavLink style={theme} to={'/signUp'}>Sign up</NavLink></p>
            </form>
        </>
    )
}