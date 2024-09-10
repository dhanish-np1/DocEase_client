import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import PatientSignUp from '../features/auth/patientAuth/patientSignup'

const AuthRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path='/' element={<AuthLayout />}>
                <Route index element={<PatientSignUp />} />
            </Route>
        </Routes>
    )
}

export default AuthRoutes