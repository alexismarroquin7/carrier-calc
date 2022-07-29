import { combineReducers } from "@reduxjs/toolkit";
import { quoteSlice } from "./quote-slice";
import { verizonSlice } from "./verizon-slice";

export const rootReducer = combineReducers({
  verizon: verizonSlice.reducer,
  quote: quoteSlice.reducer
})