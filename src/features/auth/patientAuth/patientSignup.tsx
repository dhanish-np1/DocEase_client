import React from 'react'
import StethoscopeIcon from '../../../assets/BlackLogo.svg'
import InputField from '../../../components/comen/InputField'
import Button from '../../../components/comen/Button'

const PatientSignUp: React.FC = () => {
  return (
    <>
      {/* Logo Section */}
      <div className='flex pt-12 justify-center bg-slate-50' >
        <img
          src={StethoscopeIcon}
          alt="Stethoscope Icon"
          className="h-12 w-12"
        />
        <span className="ml-2 text-black text-5xl font-bold cursor-pointer ">
          DocEase
        </span>
      </div>

      {/* Welcome Message Section */}
      <div className='flex text-center flex-col p-8 bg-slate-50'>
        <span className='text-3xl font-bold'>Welcome To DocEase</span>
        <p className='mt-1'>Sign up to start your consultation with top doctors.</p>
      </div>

      {/* Sign Up Form Section */}
      <div className='w-full h-dvh flex justify-center bg-slate-50 pb-16'>
        <form className='p-6 w-[500px] h-fit bg-white rounded-2xl shadow-2xl '>
        <p className='text-3xl font-bold mb-3 text-center'>Sign-up</p>
        
          <InputField label='Name' placeholder='Enter your name' />
          <InputField label='Email' placeholder='Enter your email' />
          <InputField label='Phone' placeholder='Enter your phone number' />
          <InputField label='Password' placeholder='Enter your password' />
          <InputField label='Confirm Password' placeholder='Confirm your password' />
          <Button value='Sign-up'/>
          {/* button separator */}
          <div className="flex items-center justify-center space-x-4 my-3">
            <div className="flex-1 border-t border-gray-400"></div>
            <span className="text-gray-600">or</span>
            <div className="flex-1 border-t border-gray-400"></div>
          </div>
          {/* Already have an account */}
          <div className="text-center font-lexend flex gap-4">
            <p className="text-gray-600">Already have an account?</p>
            <a href="#" className="text-blue-500 hover:underline">Sign In</a>
          </div>
        </form>

      </div>

    </>
  )
}

export default PatientSignUp