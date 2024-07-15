import Validator, { ValidationError } from "fastest-validator"
import { FormEventHandler, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { Input } from "../../components/Input"
import { Navigation } from "../../components/Navigaton"
import { Submit } from "../../components/Submit"
import { registerUserAsyncAction } from "../../store/reducers/registerReducer/actions"
import { getThemeSelector, registerSelector } from "../../store/selectors/selectors"
import styles from './SignUp.module.scss'

const signUpValidationSchema = {
    name: {
        type: 'string',
        min: 3,
        max: 48,
        optional: true
    },
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
    confirmpassword: {
        type: 'equal',
        field: 'password',
        optional: true,
        nullable: true
    }
}

export const check = (schema: Object, data: Object) => {
    const validator = new Validator()
    const compiledValidator = validator.compile(schema)

    return compiledValidator(data)
}

export const SignUp = () => {
    const register = useSelector(registerSelector)
    const [nameApiError, setNameApiError] = useState([])
    const [emailApiError, setEmailApiError] = useState([])
    const [formError, setFormError] = useState<ValidationError[]>([])
    const dispatch = useDispatch();
    const theme = useSelector(getThemeSelector)


    const navigate = useNavigate();


    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const result = check(signUpValidationSchema, {
            name: e.currentTarget.userName.value,
            email: e.currentTarget.userEmail.value,
            password: e.currentTarget.userPassword.value,
            confirmpassword: e.currentTarget.confirmUserPassword.value
        })

        if (result === true) {
            setFormError(formError)
            const name: string = e.currentTarget.userName.value;
            const email: string = e.currentTarget.userEmail.value;
            const password: string = e.currentTarget.userPassword.value;
            dispatch(
                registerUserAsyncAction(name, email, password, () =>
                    navigate('/confirmation', { state: email })
                )
            );

        } else { setFormError(result as ValidationError[]) }
    };

    useEffect(() => {
        for (const key in register.errors) {
            console.log(key);
            if (key === 'username') {
                const userNameErr: any = (register.errors[key]);
                setNameApiError(userNameErr)
            } else if (key === 'email') {
                const userEmailErr: any = (register.errors[key])
                setEmailApiError(userEmailErr)
            }
        }
    }, [register.errors])

    return (
        <>
            <Navigation backToHome='Back to home' text={'Sign Up'} />
            <form className={styles.formwrapper} onSubmit={handleSubmit}>
                <Input
                    type='text'
                    label='Name'
                    placeholder='Your name'
                    name='userName'
                />
                <span className={styles.errors}>{register.errors ? nameApiError : ''}</span>
                {formError.map(err => (
                    <span className={styles.errors}>{err.field === 'name' ? err.message : ''}</span>
                ))}
                <Input
                    type='email'
                    label='Email'
                    placeholder='Your email'
                    name='userEmail'
                />
                <span className={styles.errors}>{register.errors ? emailApiError : ''}</span>
                {formError.map(err => (
                    <span className={styles.errors}>{err.field === 'email' ? err.message : ''}</span>
                ))}
                <Input
                    type='password'
                    label='Password'
                    placeholder='Your password'
                    name='userPassword'
                />
                {formError.map(err => (
                    <span className={styles.errors}>{err.field === 'password' ? err.message : ''}</span>
                ))}
                <Input
                    type='password'
                    label='Confirm password'
                    placeholder='Confirm password'
                    name='confirmUserPassword'
                />
                {formError.map(err => (
                    <span className={styles.errors}>{err.field === 'confirmpassword' ? err.message : ''}</span>
                ))}
                <Submit value="Sign Up" link={''} />
                <p>Alredy have an account? <NavLink style={theme} to={'/signIn'}>Sign In</NavLink></p>
            </form>
        </>
    )
}
