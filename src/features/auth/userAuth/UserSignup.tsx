import React, { useState } from 'react'
import SignupForm from '../../../components/comen/signupForm/SignupForm'
import { FormData } from '../../../interfaces/Auth'
import { userAuthApi } from '../../../api/Auth/userAuth'
import { useNavigate } from 'react-router-dom'

const UserSignUp: React.FC = () => {
  const navigate=useNavigate()
  const [serverError, setServerError] = useState<string | null>(null); 
  const handleSubmit = async (data:FormData)=>{
    try {
      const response = await userAuthApi.signup(data)
      if (response.status === 200) {
        navigate('/auth/users/otp');
      } else {
        setServerError(response.message);
      }
      
    } catch (error) {
      console.error('Signup failed:', error);
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-white to-orange-100  flex flex-col items-center justify-center py-16">
        
    <SignupForm userType='user' onSubmit={handleSubmit} serverError={serverError}/>
     
    </div>
  )
}

export default UserSignUp