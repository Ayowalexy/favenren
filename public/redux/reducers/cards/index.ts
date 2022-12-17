import { createSlice } from "@reduxjs/toolkit";
import {
  getCard,
  getCryto,
  getWalletAddress
} from "./thunkAction";

interface crytoTypes {
  crypto_id: number | null;
  crypto_wallet_type_id: number | null
}

interface IState {
  cards: [];
  loading: "failed" | "pending" | "successful" | "idle";
  cryptos: []
  singleCrypto: crytoTypes;
  walletAddress: string;
}

const initialState: IState = {
  cards: [],
  loading: "idle",
  cryptos: [],
  singleCrypto: {
    crypto_id: null,
    crypto_wallet_type_id: null

  },
  walletAddress: ''

};

const cardSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSingleCrypto: (state, action) => {
      return {
        ...state,
        singleCrypto: {
          crypto_id: action.payload.crypto_id,
          crypto_wallet_type_id: action.payload.crypto_wallet_type_id
        }
      };
    },
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

    // get cryptos

    builder.addCase(getCryto.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(getCryto.fulfilled, (state, action) => {
      return { ...state, loading: "successful", cryptos: action.payload };
    });

    builder.addCase(getCryto.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    // get wallet address
    builder.addCase(getWalletAddress.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(getWalletAddress.fulfilled, (state, action) => {
      return { ...state, loading: "successful", walletAddress: action.payload };
    });

    builder.addCase(getWalletAddress.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

  },
});

export const cardReducer = cardSlice.reducer;
export const { setSingleCrypto } = cardSlice.actions