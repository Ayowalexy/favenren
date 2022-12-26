import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { cardReducer } from "./reducers/cards";
import { billsReducer } from "./reducers/bills";

export const rootReducer = combineReducers({
  authReducer,
  cardReducer,
  billsReducer
});
export type RootState = ReturnType<typeof rootReducer>;
