export interface InputFieldProps {
  id?: string;
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
export interface SignupFormProps {
  userType: 'user' | 'doctor' | 'admin';
  onSubmit?: (data: FormData) => Promise<void>;
  serverError?:string | null;
}

export interface FormData {
  userName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword?: string;
}

export interface FormErrors {
  userName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  submit?:string;
  general?:string;
}

export interface OTPData{
  email:string;
  otp:string;
}