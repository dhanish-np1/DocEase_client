import React from 'react'
import StethoscopeIcon from '../../../assets/BlackLogo.svg'
import InputField from '../../../components/comen/InputField'
import Button from '../../../components/comen/Button'
import GoogleLoginButton from '../../../components/comen/GoogleLoginButton'
import { Link } from 'react-router-dom';
const UserLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-white to-orange-100 flex flex-col items-center justify-center ">


      {/* Login Form Section */}
      <div className='w-full  flex justify-center py-16'>
        <form className="p-6  w-[550px] bg-white rounded-xl shadow-2xl border border-gray-100">
        {/* Logo Section */}
        <div className='flex justify-center items-center'>
          <img
            src={StethoscopeIcon}
            alt="Stethoscope Icon"
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
          />
          <span className="ml-2 text-black text-3xl sm:text-4xl md:text-5xl font-bold cursor-pointer">
            DocEase
          </span>
        </div>
           {/* Welcome Message Section */}
        <div className='text-center px-4 py-5 sm:px-6 md:px-8'>
          <h2 className='text-2xl sm:text-2xl md:text-3xl font-bold'>Welcome To DocEase</h2>
          <p className='mt-2 text-sm sm:text-base md:text-lg'>Login to start your consultation with top doctors.</p>
        </div>
          <p className="text-3xl font-bold mb-5 text-center text-gray-800">Login</p>

          {/* Input fields */}
          <InputField label="Email" placeholder="Enter your email" />
          <InputField label="Password" placeholder="Enter your password" />

          {/* Login button */}
          <Button value="Sign-up" />

          {/* Divider for alternative login */}
          <div className="flex items-center justify-center space-x-4 my-1">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google login button */}
          <GoogleLoginButton />

          {/* Already have an account */}
          <div className="text-center mt-4">
            <p className="text-gray-600 inline-block">Don't have an account?</p>
            <Link to="/auth/sign-up" className="text-blue-500 hover:underline cursor-pointer inline-block ml-2">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserLogin