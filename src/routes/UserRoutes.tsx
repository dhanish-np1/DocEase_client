import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'

const UserRoutes:React.FC=()=> {

  return (
    <Routes>
        <Route path='/' element={<UserLayout/>}>
        
        </Route>
    </Routes>
  )
}

export default UserRoutes