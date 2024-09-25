import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import UserSignUp from '../features/auth/userAuth/UserSignup'
import UserLogin from '../features/auth/userAuth/UserLogin'
import VerifyOTP from '../features/auth/comenAuth/VerifyOTP'

const AuthRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path='/' element={<AuthLayout />}>
                <Route path='/users/login' element={<UserLogin />} />
                <Route path='/users/sign-up' element={<UserSignUp />} />
                <Route path='/users/otp' element={<VerifyOTP/>}/>
            </Route>
        </Routes>
    )
}

export default AuthRoutes