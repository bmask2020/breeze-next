
import GuestLayout from '@/components/Layouts/GuestLayout'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <GuestLayout>
       
            <div class="authincation h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content" style={{backgroundColor:'#3b3363',boxShadow:'none', color:'#fff'}}>
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">
									<div class="text-center mb-3">
										<img src="images/logo-full.png" alt=""/>
									</div>
                                    <h4 class="text-center mb-4">Sign in your account</h4>
                                    <form onSubmit={submitForm}>

                                        <div class="form-group">
                                            <label class="mb-1"><strong>Email</strong></label>
                                            <input id="email" type="email" onChange={event => setEmail(event.target.value)} value={email} class="form-control" autoFocus required/>
                                            <InputError messages={errors.email} className="mt-2" />
                                        </div>

                                        <div class="form-group">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input id="password" type="password" onChange={event => setPassword(event.target.value)} value={password} class="form-control" required/>
                                            <InputError messages={errors.password} className="mt-2"/>
                                        </div>

                                        <div class="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div class="form-group">
                                               <div class="custom-control custom-checkbox ml-1">
													<input type="checkbox"  onChange={event => setShouldRemember(event.target.checked)} name="remember"  class="custom-control-input" id="basic_checkbox_1"/>
													<label class="custom-control-label" for="basic_checkbox_1">Remember my preference</label>
												</div>
                                            </div>
                                            <div class="form-group">
                                                <Link href="/forgot-password">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Don't have an account? <Link class="text-primary" href="/register">Sign up</Link></p>
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

export default Login
