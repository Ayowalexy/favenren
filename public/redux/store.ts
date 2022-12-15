import { Action, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk, { ThunkDispatch } from "redux-thunk";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
