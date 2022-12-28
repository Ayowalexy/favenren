import { createSlice } from "@reduxjs/toolkit";
import {
  getNetworkbills,
  getNetworkdata,
  buyData,
  buyAirtime,
  getElectricity,
  buyElectricity,
  getBills,
  getBillsData,
  buyCable
} from "./thunkAction";

interface IState {
  loading: "failed" | "pending" | "successful" | "idle";  
  networks: [];
  isLoading: "failed" | "pending" | "successful" | "idle"; 
  isBuying: "failed" | "pending" | "successful" | "idle"; 
  networkData: []; 
  eletricity: [];
  tv: [];
  billsData: []
}


const initialState: IState = {
 loading: 'idle',
 networks: [],
 networkData: [],
 isLoading: 'idle',
 isBuying: 'idle',
 eletricity: [],
 tv: [],
 billsData: []
};

// Then, handle actions in your reducers:ß
const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder.addCase(getNetworkbills.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(getNetworkbills.fulfilled, (state, action) => {
      return { ...state, loading: "successful", networks: action.payload };
    });
    builder.addCase(getNetworkbills.rejected, (state, action: any) => {
      return { ...state, loading: "failed", };
    });

    // get network data
    builder.addCase(getNetworkdata.pending, (state) => {
      return { ...state, isLoading: "pending" };
    });

    builder.addCase(getNetworkdata.fulfilled, (state, action) => {
      
      return { ...state, isLoading: "successful", networkData: action.payload };
    });
    builder.addCase(getNetworkdata.rejected, (state, action: any) => {
      return { ...state, isLoading: "failed", };
    });

     // get bills data
     builder.addCase(getBillsData.pending, (state) => {
      return { ...state, isLoading: "pending" };
    });

    builder.addCase(getBillsData.fulfilled, (state, action) => {
      
      return { ...state, isLoading: "successful", billsData: action.payload };
    });
    builder.addCase(getBillsData.rejected, (state, action: any) => {
      return { ...state, isLoading: "failed", };
    });

     // buy data
     builder.addCase(buyData.pending, (state) => {
      return { ...state, isBuying: "pending" };
    });

    builder.addCase(buyData.fulfilled, (state, action) => {
      
      return { ...state, isBuying: "successful" };
    });
    builder.addCase(buyData.rejected, (state) => {
      return { ...state, isBuying: "failed", };
    });

    // buy airtime
    builder.addCase(buyAirtime.pending, (state) => {
      return { ...state, isBuying: "pending" };
    });

    builder.addCase(buyAirtime.fulfilled, (state, action) => {
      
      return { ...state, isBuying: "successful" };
    });
    builder.addCase(buyAirtime.rejected, (state) => {
      return { ...state, isBuying: "failed", };
    });


    // get electricity
    builder.addCase(getElectricity.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(getElectricity.fulfilled, (state, action) => {
      
      return { ...state, loading: "successful", eletricity: action.payload };
    });
    builder.addCase(getElectricity.rejected, (state) => {
      return { ...state, loading: "failed", };
    });


    // get bills
    builder.addCase(getBills.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(getBills.fulfilled, (state, action) => {
      
      return { ...state, loading: "successful", tv: action.payload };
    });
    builder.addCase(getBills.rejected, (state) => {
      return { ...state, loading: "failed", };
    });

     // buy electricity
     builder.addCase(buyElectricity.pending, (state) => {
      return { ...state, isBuying: "pending" };
    });

    builder.addCase(buyElectricity.fulfilled, (state, action) => {
      
      return { ...state, isBuying: "successful" };
    });
    builder.addCase(buyElectricity.rejected, (state) => {
      return { ...state, isBuying: "failed", };
    });

    // buy cable
     builder.addCase(buyCable.pending, (state) => {
      return { ...state, isBuying: "pending" };
    });

    builder.addCase(buyCable.fulfilled, (state, action) => {
      
      return { ...state, isBuying: "successful" };
    });
    builder.addCase(buyCable.rejected, (state) => {
      return { ...state, isBuying: "failed", };
    });

    
  },
});
export const billsReducer = billsSlice.reducer;

// Later, dispatch the thunk as needed in the app
