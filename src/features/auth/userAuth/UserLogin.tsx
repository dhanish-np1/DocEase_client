import React from 'react'
import LoginForm from '../../../components/comen/LoginForm'


const UserLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-white to-orange-100 flex flex-col items-center justify-center ">
      <LoginForm/>
    </div>
  )
}

export default UserLogin