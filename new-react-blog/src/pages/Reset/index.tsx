import Validator, { ValidationError } from 'fastest-validator'
import { FormEventHandler, useState } from 'react'
import { Input } from '../../components/Input'
import { Navigation } from '../../components/Navigaton'
import { Submit } from '../../components/Submit'
import { fetchResetPassword } from '../../services/user/getUser'
import styles from './Reset.module.scss'

const resetValidationSchema = {
    email: { type: 'email' },
}

export const check = (schema: Object, data: Object) => {
    const validator = new Validator()
    const compiledValidator = validator.compile(schema)

    return compiledValidator(data)
}

export const Reset = () => {
    const [formError, setFormError] = useState<ValidationError[]>([])
    const [email, setEmail] = useState<string>()
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        const result = check(resetValidationSchema, {
            email: e.currentTarget.email.value,
        })
        e.preventDefault()
        if (result === true) {
            setFormError([])
            const email: string = e.currentTarget.email.value
            fetchResetPassword(email)
            setEmail(email)
        } else { setFormError(result as ValidationError[]) }
    }

    return (
        <>
            <Navigation text={'Reset password'} backToHome={'Back to home'} />
            <form className={styles.formwrapper} onSubmit={handleSubmit}>
                <span className={email ? `${styles.active}` : `${styles.span}`}>You will receive an email <b>{email}</b> with a link to reset your password! </span>
                <Input type={'email'} label={'Email'} placeholder={'Your email'} name={'email'} />
                {formError.map(err => (
                    <span key={err.field} className={styles.errors}>{err.field === 'email' ? err.message : ''}</span>
                ))}
                <Submit link={'/'} value={'Reset'} onClick={() => { }} />
            </form>
        </>
    )
}