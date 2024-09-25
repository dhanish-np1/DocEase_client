import { FormData,FormErrors } from "../interfaces/Auth";

import * as Yup from 'yup';

export const signupValidationSchema = Yup.object().shape({
  userName: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters long')
    .required('Name is required'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const validateForm = async (data: FormData):Promise<FormErrors> => {
  try {
    await signupValidationSchema.validate(data, { abortEarly: false });
    return {};
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      const errors: { [key: string]: string } = {};
      error.inner.forEach((err) => {
        if (err.path) {
          errors[err.path] = err.message;
        }
      });
      return errors;
    }
    return { general: 'An error occurred during validation' };
  }
};