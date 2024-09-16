import React from 'react'
import UserHeader from '../components/headers/UserHeader'
import { Outlet } from 'react-router-dom'
const UserLayout:React.FC=() =>{
  return (
    <div>
        <UserHeader/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default UserLayout