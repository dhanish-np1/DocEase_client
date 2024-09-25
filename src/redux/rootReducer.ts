import { combineReducers } from '@reduxjs/toolkit';
import otpReducer from './slices/otpSlice';



const rootReducer = combineReducers({
    otp:otpReducer,
});

export default rootReducer;