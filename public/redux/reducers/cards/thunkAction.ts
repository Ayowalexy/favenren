import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import config from "../../../../config/api";
import useAxios from "../../../hooks/UseAxios";

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

