import React from 'react';
import StethoscopeIcon from '../../../assets/BlackLogo.svg';
import { SignupFormProps } from '../../../interfaces/Auth';

const SignupFormHeader: React.FC<SignupFormProps> = ({ userType }) => {
  const getWelcomeMessage = () => {
    switch (userType) {
      case 'user':
        return 'Sign up to start your consultation with top doctors.';
      case 'doctor':
        return 'Sign up to provide consultations to patients.';
      case 'admin':
        return 'Sign up to manage the system as an admin.';
      default:
        return 'Sign up to access the platform.';
    }
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <img
          src={StethoscopeIcon}
          alt='Stethoscope Icon'
          className='h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12'
        />
        <span className='ml-2 text-black text-3xl sm:text-4xl md:text-5xl font-bold cursor-pointer'>
          DocEase
        </span>
      </div>

      <div className='text-center px-4 py-5 sm:px-6 md:px-8'>
        <h2 className='text-2xl sm:text-2xl md:text-3xl font-bold'>Welcome To DocEase</h2>
        <p className='mt-2 text-sm sm:text-base md:text-lg'>{getWelcomeMessage()}</p>
      </div>
      <p className="text-3xl font-bold mb-5 text-center text-gray-800">Sign-up</p>

    </>
  );
};

export default SignupFormHeader;
