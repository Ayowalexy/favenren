import { createSlice } from "@reduxjs/toolkit";
import {
  getCard,
  getCryto,
  getWalletAddress,
  getSingleGiftcard,
  getTransactions,
  makecryptotransaction,
  getCardWalletTypes,
  getBanks,
  getUserBankAccount,
  withdrawReward,
  verifyAccount,
  withdrawWallet
} from "./thunkAction";

interface crytoTypes {
  crypto_id: number | null;
  crypto_wallet_type_id: number | null
}

interface bankAccountTyoes {
  id: number;
  user_id: string
  account_number: string;
  account_name: string;
  bank: string;
  bank_name: string;
}

interface IState {
  cards: [];
  loading: "failed" | "pending" | "successful" | "idle";
  isLoading: "failed" | "pending" | "successful" | "idle";
  gettingUserBankAccount: "failed" | "pending" | "successful" | "idle";
  cryptos: []
  singleCrypto: crytoTypes;
  walletAddress: string;
  singleGiftcard: [];
  singleGiftcardId: string;
  countryFlags: [];
  transactions: [];
  walletTypes: [];
  allBanks: [];
  bankAccount: bankAccountTyoes;
  errMsg: string | any;
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
  walletTypes: [],
  allBanks: [],
  bankAccount: {
    id: 0,
    user_id: '',
    account_number: '',
    account_name: '',
    bank: '',
    bank_name: ''
  },
  gettingUserBankAccount: 'idle',
  errMsg: ''
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
      return { ...state, isLoading: "successful", walletTypes: action.payload };
    });

    builder.addCase(getCardWalletTypes.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, isLoading: "failed" };
    });

    // get all banks
    builder.addCase(getBanks.pending, (state) => {
      return { ...state, isLoading: "pending" };
    });

    builder.addCase(getBanks.fulfilled, (state, action) => {
      return { ...state, isLoading: "successful", allBanks: action.payload };
    });

    builder.addCase(getBanks.rejected, (state, action) => {
      return { ...state, isLoading: "failed" };
    });

    // get user bank account
    builder.addCase(getUserBankAccount.pending, (state) => {
      return { ...state, gettingUserBankAccount: "pending" };
    });

    builder.addCase(getUserBankAccount.fulfilled, (state, action) => {
      return { ...state, gettingUserBankAccount: "successful", bankAccount: action.payload };
    });

    builder.addCase(getUserBankAccount.rejected, (state, action) => {
      return { ...state, gettingUserBankAccount: "failed" };
    });

     // withdraw reward
     builder.addCase(withdrawReward.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(withdrawReward.fulfilled, (state, action) => {
      return { ...state, loading: "successful", };
    });

    builder.addCase(withdrawReward.rejected, (state, action) => {

      return { ...state, loading: "failed", errMsg: action.payload };
    });

     // withdraw reward
     builder.addCase(withdrawWallet.pending, (state) => {
      return { ...state, isLoading: "pending" };
    });

    builder.addCase(withdrawWallet.fulfilled, (state, action) => {
      return { ...state, isLoading: "successful", };
    });

    builder.addCase(withdrawWallet.rejected, (state, action) => {

      return { ...state, isLoading: "failed", errMsg: action.payload };
    });

    // verify account
    builder.addCase(verifyAccount.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(verifyAccount.fulfilled, (state, action) => {
      console.log('ressss', action.payload)
      return { ...state, loading: "successful", };
    });

    builder.addCase(verifyAccount.rejected, (state, action) => {
      const actionError = action.payload
      console.log("actionError", actionError)
      return { ...state, loading: "failed", };
    });

  },
});

export const cardReducer = cardSlice.reducer;
export const { setSingleCrypto, setSingleGiftcard } = cardSlice.actions