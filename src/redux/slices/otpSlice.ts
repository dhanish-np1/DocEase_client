import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OtpState {
  timer: number;
  isResendDisabled: boolean;
}

const initialState: OtpState = {
  timer: 60,
  isResendDisabled: true,
};

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    decrementTimer: (state) => {
      if (state.timer > 0) {
        state.timer -= 1;
      }
      if (state.timer === 0) {
        state.isResendDisabled = false;
      }
    },
    resetTimer: (state) => {
      state.timer = 60;
      state.isResendDisabled = true;
    },
  },
});

export const { decrementTimer, resetTimer } = otpSlice.actions;
export default otpSlice.reducer;
