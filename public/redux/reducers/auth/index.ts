import { createSlice } from "@reduxjs/toolkit";
import {
  checksuername,
  signUp,
  login,
  verifyotp,
  sendOtp,
  forgotPassword,
  resetPassword,
  checkreferer,
  loginNofitication,
  getHomeData,
  updatePassword
} from "./thunkAction";

interface IState {
  user: object;
  loading: "failed" | "pending" | "successful" | "idle";
  token: string;
  isChecking: "failed" | "pending" | "successful" | "idle";
  message: string;
  otpMessage: string;
  isSending: "failed" | "pending" | "successful" | "idle";
  isCheckingRef: "failed" | "pending" | "successful" | "idle";
  isLoadingHomeData: "failed" | "pending" | "successful" | "idle";
  msg: string;
  services: [];
  promotions: [];
  reward_balance: string;
  wallet_balance: string;


}

let authenticated = "";

if (typeof window !== "undefined") {
  authenticated = localStorage.getItem("token") || "";
}
const initialState: IState = {
  user: {},
  token: authenticated,
  loading: "idle",
  message: "",
  isChecking: 'idle',
  otpMessage: "",
  isSending: 'idle',
  isCheckingRef: "idle",
  msg: "",
  services: [],
  promotions: [],
  reward_balance: "",
  wallet_balance: '',
  isLoadingHomeData: 'idle'

};

// Then, handle actions in your reducers:ß
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },

  extraReducers: (builder) => {
    builder.addCase(checksuername.pending, (state) => {
      return { ...state, isChecking: "pending" };
    });

    builder.addCase(checksuername.fulfilled, (state, action) => {
      return { ...state, isChecking: "successful", message: action.payload };
    });
    builder.addCase(checksuername.rejected, (state, action: any) => {
      const resData = action.payload[0] || 'Error occured'
      return { ...state, isChecking: "failed", message: resData };
    });

    //signup
    builder.addCase(signUp.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(signUp.fulfilled, (state) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(signUp.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //login
    builder.addCase(login.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(login.fulfilled, (state, action) => {
      return { ...state, loading: "successful", user: action.payload };
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });


    //verify
    builder.addCase(verifyotp.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(verifyotp.fulfilled, (state) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(verifyotp.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });


    //send otp
    builder.addCase(sendOtp.pending, (state) => {
      return { ...state, isSending: "pending" };
    });

    builder.addCase(sendOtp.fulfilled, (state) => {
      return { ...state, isSending: "successful", };
    });
    builder.addCase(sendOtp.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, isSending: "failed" };
    });


    //forgot password
    builder.addCase(forgotPassword.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(forgotPassword.fulfilled, (state) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });


    //reset password
    builder.addCase(resetPassword.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(resetPassword.fulfilled, (state) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      return { ...state, loading: "failed" };
    });


    //check ref
    builder.addCase(checkreferer.pending, (state) => {
      return { ...state, isCheckingRef: "pending" };
    });

    builder.addCase(checkreferer.fulfilled, (state, action) => {
      return { ...state, isCheckingRef: "successful", msg: action.payload};
    });
    builder.addCase(checkreferer.rejected, (state, action: any) => {
      const resData = action.payload || 'Error occured'

      return { ...state, isCheckingRef: "failed", msg: resData};
    });

    //notify login
    builder.addCase(loginNofitication.pending, (state) => {
      return { ...state, isCheckingRef: "pending" };
    });

    builder.addCase(loginNofitication.fulfilled, (state, action) => {
      return { ...state, isCheckingRef: "successful",};
    });
    builder.addCase(loginNofitication.rejected, (state, action) => {
      return { ...state, isCheckingRef: "failed" };
    });

     //get home data
     builder.addCase(getHomeData.pending, (state) => {
      return { ...state, isLoadingHomeData: "pending" };
    });

    builder.addCase(getHomeData.fulfilled, (state, action) => {

      const { services, promotions, wallet_balance , reward_balance } = action.payload
      return { ...state, isLoadingHomeData: "successful", services, promotions, wallet_balance, reward_balance };
    });
    builder.addCase(getHomeData.rejected, (state, action) => {
      return { ...state, isLoadingHomeData: "failed" };
    });


    //update password
    builder.addCase(updatePassword.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(updatePassword.fulfilled, (state ) => {
      return { ...state, loading: "successful"};
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      return { ...state, loading: "failed" };
    });
  },
});
export const authReducer = authSlice.reducer;

// Later, dispatch the thunk as needed in the app
