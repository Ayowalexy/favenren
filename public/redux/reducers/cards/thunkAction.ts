import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import config from "../../../../config/api";
import useAxios from "../../../hooks/UseAxios";
import { getToken } from "../../../hooks/UseAxios";

export const getCard = createAsyncThunk(
  "card/getCards",
  async (data, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/show-giftcards`,
        method: "get",
      });

      console.log(response);

      return response.data;
    } catch (error) {

      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const getCryto = createAsyncThunk(
  "card/getCypto",
  async (data, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/cryptos`,
        method: "get",
      });

      return response.data;
    } catch (error) {

      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const getWalletAddress = createAsyncThunk(
  "card/getWalletAddress",
  async (data, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/crypto-wallet-address`,
        method: "post",
        data: data
      });

      return response.data;
    } catch (error) {

      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const getSingleGiftcard = createAsyncThunk(
  "card/getSingleGiftcard",
  async (id, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/show-giftcards/${id}`,
        method: "get",
      });

      return response.data;
    } catch (error) {

      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const getTransactions = createAsyncThunk(
  "card/getTransactions",
  async (id, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/transactions`,
        method: "get",
      });

      return response.data;
    } catch (error) {

      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const makecryptotransaction = createAsyncThunk(
  "card/makecryptotransaction",
  async (data, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/make-crypto-transaction`,
        method: "post",
        data: data
      });
      console.log('response', response.data)
      return response.data;
    } catch (error) {
      console.log('error', error)
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const makegiftcard = createAsyncThunk(
  "card/makegiftcard",
  async (data, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/make-giftcard-transaction`,
        method: "post",
        data: data
      });
      console.log('response', response.data)
      return response.data;
    } catch (error) {
      console.log('error', error)
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const getCardWalletTypes = createAsyncThunk(
  "card/getCardWalletTypes",
  async (id, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/cryptos/${id}`,
        method: "get",
      });
      console.log('response', response.data)
      return response.data;
    } catch (error) {
      console.log('error', error)
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const getBanks = createAsyncThunk(
  "card/getBanks",
  async (id, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/get-banks`,
        method: "get",
      });
      console.log('response', response.data.data)
      return response.data.data;
    } catch (error) {
      console.log('error', error)
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);





export const getUserBankAccount = createAsyncThunk(
  "card/getUserBankAccount",
  async (id, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/bank-account`,
        method: "get",
      });
      console.log('response', response.data)
      return response.data.data;
    } catch (error) {
      console.log('error', error)
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const withdrawReward = createAsyncThunk(
  "card/withdrawReward",
  async (data, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/withdraw-reward`,
        method: "post",
        data: data
      });
      console.log('response', response.data)
      return response.data;
    } catch (error) {
      console.log('error', error)
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data.errors[0]);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const withdrawWallet = createAsyncThunk(
  "card/withdrawWallet",
  async (data, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/withdraw-wallet`,
        method: "post",
        data: data
      });
      console.log('response', response.data)
      return response.data;
    } catch (error) {
      console.log('error', error)
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data.errors[0]);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const verifyAccount = createAsyncThunk(
  "card/verifyAccount",
  async (data, thunkAPI) => {
    console.log('call data', data)
    try {
     
      const response = await useAxios({
        url: `${config.API_BASE_URL}/verify-bank-account`,
        method: "post",
        data: data
      });
      console.log('response---', response.data)
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log('error', error)
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);