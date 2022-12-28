import { createSlice } from "@reduxjs/toolkit";
import {
  getCard,
  getCryto,
  getWalletAddress,
  getSingleGiftcard,
  getTransactions,
  makecryptotransaction,
  getCardWalletTypes
} from "./thunkAction";

interface crytoTypes {
  crypto_id: number | null;
  crypto_wallet_type_id: number | null
}

interface IState {
  cards: [];
  loading: "failed" | "pending" | "successful" | "idle";
  isLoading: "failed" | "pending" | "successful" | "idle";
  cryptos: []
  singleCrypto: crytoTypes;
  walletAddress: string;
  singleGiftcard: [];
  singleGiftcardId: string;
  countryFlags: [];
  transactions: [];
  walletTypes: [];
}

const initialState: IState = {
  cards: [],
  loading: "idle",
  isLoading: 'idle',
  cryptos: [],
  singleCrypto: {
    crypto_id: null,
    crypto_wallet_type_id: null

  },
  walletAddress: '',
  singleGiftcard: [],
  singleGiftcardId: '',
  countryFlags: [],
  transactions: [],
  walletTypes: []
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

    setSingleGiftcard: (state, action) => {
      return {
        ...state,
        singleGiftcardId: action.payload
      }
    }
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

    // get single giftcard
    builder.addCase(getSingleGiftcard.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(getSingleGiftcard.fulfilled, (state, action) => {
      const country = action.payload?.map((ele: any) => ele.country_iso)
      return { 
        ...state, 
        loading: "successful", 
        singleGiftcard: action.payload,
        countryFlags: country
       };
    });

    builder.addCase(getSingleGiftcard.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    // get transactions
    builder.addCase(getTransactions.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(getTransactions.fulfilled, (state, action) => {
      return { ...state, loading: "successful", transactions: action.payload };
    });

    builder.addCase(getTransactions.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });


    // make transactions
    builder.addCase(makecryptotransaction.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(makecryptotransaction.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });

    builder.addCase(makecryptotransaction.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });


    // get wallet types
    builder.addCase(getCardWalletTypes.pending, (state) => {
      return { ...state, isLoading: "pending" };
    });

    builder.addCase(getCardWalletTypes.fulfilled, (state, action) => {
      return { ...state, isLoading: "successful" , walletTypes: action.payload};
    });

    builder.addCase(getCardWalletTypes.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, isLoading: "failed" };
    });

  },
});

export const cardReducer = cardSlice.reducer;
export const { setSingleCrypto, setSingleGiftcard } = cardSlice.actions