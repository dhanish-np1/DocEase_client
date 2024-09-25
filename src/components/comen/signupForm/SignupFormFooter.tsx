import React from 'react';
import GoogleLoginButton from '../GoogleLoginButton'
import { Button } from '@nextui-org/button'
import { Link, } from 'react-router-dom';
import { SignupFormProps } from '../../../interfaces/Auth';



const SignupFormFooter: React.FC<SignupFormProps> = () => {
    return (
        <>
            {/* Signup button */}
            <Button  type='submit' radius="sm" className='w-full bg-[#FF6600] text-white font-lexend'>Sign-up</Button>

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
                <p className="text-gray-600 inline-block">Already have an account?</p>
                <Link to="/auth/users/login" className="text-blue-500 hover:underline cursor-pointer inline-block ml-2">
                    Sign In
                </Link>
            </div>
        </>
    );
};

export default SignupFormFooter;
