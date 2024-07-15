import { Navigation } from "../../components/Navigaton"
import { Submit } from '../../components/Submit'
import { Input } from '../../components/Input'
import styles from './styles.module.scss'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { FormEventHandler, useState } from "react"
import { resetPasswordAsyncAction } from "../../store/reducers/resetReducer/actions"
import Validator, { ValidationError } from "fastest-validator"

const newPasswordValidationSchema = {
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

export const NewPassword = () => {
    const [newPasswordMessage, setNewPasswordMessage] = useState('')
    const [formError, setFormError] = useState<ValidationError[]>([])
    const navigate = useNavigate();
    const { uid, token } = useParams();
    const dispatch = useDispatch();
    console.log(uid, token);
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const result = check(newPasswordValidationSchema, {
            password: e.currentTarget.password.value,
            confirmpassword: e.currentTarget.confirm_password.value
        })
        if (result === true) {
            setFormError([])
            const new_password: string = e.currentTarget.password.value
            if (uid && token) {
                setNewPasswordMessage('Your password has been changed')
                setTimeout(
                    dispatch(resetPasswordAsyncAction(uid, token, new_password, () => navigate('/signIn'))),
                    4000
                )
            } else {
                return
            }
        } else {
            setFormError(result as ValidationError[])
        }
    }

    return (
        <>
            <Navigation text={'New Password'} backToHome={'Back to home'} />
            <form className={styles.formwrapper} onSubmit={handleSubmit} >
                <span>{newPasswordMessage}</span>
                <Input type={'password'} label={'Password'} placeholder={'Your Password'} name={'password'} />
                {formError.map(err => (
                    <span className={styles.errors}>{err.field === 'password' ? err.message : ''}</span>
                ))}
                <Input type={'password'} label={'Confirm Password'} placeholder={'Confirm Password'} name={'confirm_password'} />
                {formError.map(err => (
                    <span className={styles.errors}>{err.field === 'confirmpassword' ? err.message : ''}</span>
                ))}
                <Submit link={'/'} value={'Reset'} />
            </form>
        </>
    )
}