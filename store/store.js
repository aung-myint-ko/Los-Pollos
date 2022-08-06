import { configureStore } from "@reduxjs/toolkit";
import { shopSlice } from "./states";

const store = configureStore({
  reducer: {
    shopReducer: shopSlice.reducer,
  },
});

export default store;
