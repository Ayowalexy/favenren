import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { cardReducer } from "./reducers/cards";

export const rootReducer = combineReducers({
  authReducer,
  cardReducer
});
export type RootState = ReturnType<typeof rootReducer>;
