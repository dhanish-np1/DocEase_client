import React, { useState } from 'react'
import InputField from '../InputField'
import SignupFormHeader from './SignupFormHeader'
import { SignupFormProps, FormErrors, FormData } from '../../../interfaces/Auth';
import { validateForm } from '../../../validation/signupValidation';
import SignupFormFooter from './SignupFormFooter';


const SignupForm: React.FC<SignupFormProps> = ({ userType, onSubmit, serverError }) => {
  const [formData, setFormData] = useState<FormData>({
    userName: 'dhanish',
    email: 'dhanish@gmail.com',
    phone: '1234567891',
    password: '123456@Dh',
    confirmPassword: '123456@Dh'
  })

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }))

  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = await validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        if (onSubmit) {
          await onSubmit(formData);
          setFormData({
            userName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
          });
          setErrors({});
        }

      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ ...errors, submit: 'An error occurred. Please try again.' });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (

    <form onSubmit={handleSubmit} className="p-6  w-[550px] bg-white rounded-xl shadow-2xl border border-gray-100">

      <SignupFormHeader userType={userType} />


      {/* Input fields */}
      <InputField label="Name"
        placeholder="Enter your name"
        name='userName'
        onChange={handleChange}
        value={formData.userName}
        error={errors.userName} />

      <InputField label="Email"
        placeholder="Enter your email"
        name='email'
        onChange={handleChange}
        value={formData.email}
        error={errors.email} />

      <InputField label="Phone"
        placeholder="Enter your phone number"
        name='phone'
        onChange={handleChange}
        value={formData.phone}
        error={errors.phone} />

      <InputField label="Password"
        placeholder="Enter your password"
        name='password'
        type='password'
        onChange={handleChange}
        value={formData.password}
        error={errors.password} />

      <InputField label="Confirm Password"
        placeholder="Confirm your password"
        name='confirmPassword'
        type='password'
        onChange={handleChange}
        value={formData.confirmPassword}
        error={errors.confirmPassword} />

      {serverError && (
        <div className="text-red-600 mb-4">
          {serverError}
        </div>
      )}

      <SignupFormFooter userType={userType} />

    </form>
  )
}

export default SignupForm;