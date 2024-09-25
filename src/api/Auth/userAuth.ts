import Api from "../../service/axiosConfig";
import { userEndpoints } from "../../service/endpoints/authEndpoints/userEndponts";
import { FormData,OTPData } from "../../interfaces/Auth";


export const userAuthApi ={

    signup: async (userData:FormData)=>{
        const response =await Api.post(userEndpoints.signup,userData);
        return response.data;
    },
    verifyUser: async(OTPData:OTPData)=>{
        const response = await Api.post(userEndpoints.verifyOtp,OTPData)
        return response;
    }

}