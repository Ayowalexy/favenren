import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import config from "../../../../config/api";
import useAxios from "../../../hooks/UseAxios";

export const getNetworkbills = createAsyncThunk(
  "bills/getNetworkbills",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/get-network-list`,
        method: "get",
      });
      const authData = response.data;
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


export const getNetworkdata = createAsyncThunk(
  "bill/getNetworkdata",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/get-data-list`,
        method: "get",
        params: data,
      });

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


export const buyData = createAsyncThunk(
  "bill/buyData",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/buy-data`,
        method: "post",
        params: data,
      });
      
      return response.data;
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.error as string || 'An error occured, please try again'
        toast.error(msg);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const buyAirtime = createAsyncThunk(
  "bill/airtime",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/buy-airtime`,
        method: "post",
        params: data,
      });
      
      return response.data;
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.error as string || 'An error occured, please try again'
        toast.error(msg);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);