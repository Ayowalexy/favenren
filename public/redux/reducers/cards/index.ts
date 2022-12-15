import { createSlice } from "@reduxjs/toolkit";
import { getCard } from "./thunkAction";

interface IState {
  cards: [];
  loading: "failed" | "pending" | "successful" | "idle";
}

const initialState: IState = {
  cards: [],
  loading: "idle",
 
};

const cardSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(getCard.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(getCard.fulfilled, (state, action) => {
      return { ...state, loading: "successful", cards: action.payload };
    });
    builder.addCase(getCard.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

  },
});
export const cardReducer = cardSlice.reducer;
