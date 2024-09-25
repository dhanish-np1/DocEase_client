import React, { useEffect, useState } from "react";
import StethoscopeIcon from "../../assets/BlackLogo.svg";
import InputField from "./InputField";
import { Button } from "@nextui-org/button";
import { Lock, Mail, CheckCircle } from "lucide-react";
import { useAppSelector, useAppDispatch } from "../../hooks/useTypedRedux";
import { decrementTimer, resetTimer } from "../../redux/slices/otpSlice";
import { userAuthApi } from "../../api/Auth/userAuth";

interface userType {
  userType: string;
  email:string;
}

const OTPForm: React.FC<userType> = ({ userType,email }) => {
  const dispatch = useAppDispatch();
  const { isResendDisabled, timer } = useAppSelector((state) => state.otp);
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(decrementTimer());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const handleResendOTP = () => {
    dispatch(resetTimer());
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
   

    try {
      let response;
      if(userType=='user'){
        response= await userAuthApi.verifyUser({otp,email})
        
      }
    } catch (error) {
      console.error('Error submitting OTP:', error);
      setError('An error occurred. Please try again later.');
    }
  };


  return (
    <div className="flex flex-col w-[450px] py-10 px-8 bg-white rounded-xl shadow-2xl border border-orange-300">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center mb-3">
          <img
            src={StethoscopeIcon}
            alt="Stethoscope Icon"
            className="h-10 w-10 sm:h-12 sm:w-12"
          />
          <span className="ml-3 text-black text-4xl sm:text-5xl font-bold">
            DocEase
          </span>
        </div>
        <div className="w-16 h-1 bg-[#FF6600] rounded-full"></div>
      </div>

      <div className="bg-white border-2 border-orange-200 rounded-lg p-5 mb-6 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
          <CheckCircle className="text-green-500 mr-2" size={24} />
          Verify Your Email
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          We've sent a 6-digit code to your email. Enter it below to secure your
          account and access DocEase.
        </p>
      </div>

      {/* <div className="flex items-center mb-4">
        <Mail className="text-gray-400 mr-2" size={20} />
        <p className="text-gray-600 text-sm">
          Code sent to: jo********@example.com
        </p>
      </div> */}
      <form onSubmit={handleSubmit}>
      <InputField placeholder="Enter you 6 digit OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <Button
        type="submit"
        radius="sm"
        className="w-full bg-[#FF6600] text-white font-lexend py-3 mt-4 hover:bg-[#FF8533] transition-colors duration-300 shadow-md flex items-center justify-center"
      >
        <Lock className="mr-2" size={18} />
        Verify OTP
      </Button>

      <div className="flex justify-between items-center mt-6 mb-4">
        <span
          className={`text-[#FF6600] cursor-pointer hover:underline text-sm font-medium flex items-center ${isResendDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={isResendDisabled ? undefined : handleResendOTP}
        >
          <Mail className="mr-1" size={16} />
          Resend OTP
        </span>
        <span className="text-gray-600 text-sm bg-white px-3 py-1 rounded-full border border-orange-200 shadow-sm">
          {formatTime(timer)}
        </span>{" "}
      </div>
      </form>
      <div className="flex justify-center items-center text-gray-600 text-sm  bg-white p-3 rounded-lg shadow-sm">
        <span>Wrong email? </span>
        <span className="text-orange-600 cursor-pointer hover:text-orange-700 ml-1 font-medium transition-colors duration-300">
          Go back
        </span>
      </div>
    </div>
  );
};

export default OTPForm;
