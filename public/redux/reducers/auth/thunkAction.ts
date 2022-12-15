import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import config from "../../../../config/api";
import useAxios from "../../../hooks/UseAxios";

export const signUp = createAsyncThunk(
  "auth/signup",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/register`,
        method: "post",
        params: data,
      });

      console.log(response);

      if (typeof window !== "undefined") {
        // localStorage.setItem("user", JSON.stringify(authData.data.user));
        // localStorage.setItem("token", authData.data.token);
      }
      return response.data;
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.message[0] as string || 'An error occured, please try again'
        toast.error(msg);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/login-email`,
        method: "post",
        params: data,
      });


      const authData = response;

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(authData.data.user));
        localStorage.setItem("token", authData.data.token);
      }
      return response.data.user
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(msg);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);




export const checksuername = createAsyncThunk(
  "auth/checkusername",
  async (username: string, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/check-username`,
        method: "post",
        params: {
          username
        }
      });
      const authData = response.data.message;
    
      return authData
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const msg = error.response.data.message as string || 'An error occured, please try again'
        // toast.error(msg);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const checkreferer = createAsyncThunk(
  "auth/checkreferer",
  async (username: string, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/check-referrer`,
        method: "post",
        data: { username }
      });
      const authData = response.data.message;
    
      return authData
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const msg = error.response.data.message as string || 'An error occured, please try again'
        // toast.error(msg);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);




export const verifyotp = createAsyncThunk(
  "auth/verify",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/verify-email-otp`,
        method: "post",
        params: data
      });
      const authData = response.data.message;
      console.log(response)
      return authData
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(msg);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const sendOtp = createAsyncThunk(
  "auth/sendotp",
  async (email: string, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/resend-email-otp`,
        method: "post",
        params: {
          email
        }
      });
      const authData = response.data.message;
      console.log("response", response)
      return authData
    } catch (error) {
      console.log("response", error)
      if (axios.isAxiosError(error) && error.response) {
        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(msg);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const forgotPassword = createAsyncThunk(
  "auth/forgotpassword",
  async (email: string, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/forgot-email-password`,
        method: "post",
        params: {
          email
        }
      });
      const authData = response.data.message;
      console.log("response", response)
      return authData
    } catch (error) {
      console.log("response", error)
      if (axios.isAxiosError(error) && error.response) {
        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(msg);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/reset-password`,
        method: "post",
        params: data
      });
      const authData = response.data.message;
      console.log("response", response)
      return authData
    } catch (error) {
      console.log("response", error)
      if (axios.isAxiosError(error) && error.response) {
        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(msg);
        return thunkAPI.rejectWithValue(msg)
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);
