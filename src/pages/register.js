
import GuestLayout from '@/components/Layouts/GuestLayout'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <GuestLayout>

            <div class="authincation h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">
									<div class="text-center mb-3">
										<img src="images/logo-full.png" alt=""/>
									</div>
                                    <h4 class="text-center mb-4">Sign up your account</h4>
                                    <form onSubmit={submitForm}>

                                        <div class="form-group">
                                            <label class="mb-1"><strong>Name</strong></label>
                                            <input type="text" onChange={event => setName(event.target.value)} class="form-control" value={name} required autoFocus/>
                                            <InputError messages={errors.email} className="mt-2" />
                                        </div>

                                        <div class="form-group">
                                            <label class="mb-1"><strong>Email</strong></label>
                                            <input type="email" value={email}  class="form-control" onChange={event => setEmail(event.target.value)} required/>
                                            <InputError messages={errors.email} className="mt-2" />
                                        </div>

                                        <div class="form-group">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" value={password} onChange={event => setPassword(event.target.value)} class="form-control" required/>
                                            <InputError messages={errors.password} className="mt-2"/>
                                        </div>

                                        <div class="form-group">
                                            <label class="mb-1"><strong>Confirm Password</strong></label>
                                            <input type="password" value={passwordConfirmation} onChange={event => setPasswordConfirmation(event.target.value)} class="form-control" required/>
                                            <InputError messages={errors.passwordConfirmation} className="mt-2"/>
                                        </div>

                                        <div class="text-center mt-4">
                                            <button type="submit" class="btn btn-primary btn-block">Sign me up</button>
                                        </div>

                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Already have an account? <Link class="text-primary" href="/login">Sign in</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </GuestLayout>
    )
}

export default Register
