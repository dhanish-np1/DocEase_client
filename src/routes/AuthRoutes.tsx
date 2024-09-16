import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import UserSignUp from '../features/auth/userAuth/UserSignup'
import UserLogin from '../features/auth/userAuth/UserLogin'

const AuthRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path='/' element={<AuthLayout />}>
                <Route path='/login' element={<UserLogin />} />
                <Route path='/sign-up' element={<UserSignUp />} />
            </Route>
        </Routes>
    )
}

export default AuthRoutes