import { combineReducers } from "@reduxjs/toolkit";
import { quoteSlice } from "./quote-slice";

export const rootReducer = combineReducers({
  quote: quoteSlice.reducer
})