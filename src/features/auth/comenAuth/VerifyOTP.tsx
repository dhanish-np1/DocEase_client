import React from "react";
import OTPForm from "../../../components/comen/OTPForm";

const VerifyOTP: React.FC = ()=>{
    return(
        <div className="flex h-dvh justify-center items-center bg-gradient-to-r from-orange-100 via-white to-orange-100">
            <OTPForm userType="user" email="dhanishd947@gmail.com"/>
        </div>
    )
}

export default VerifyOTP;