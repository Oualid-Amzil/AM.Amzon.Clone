import { configureStore } from "@reduxjs/toolkit";
import basketsSlice from "./basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketsSlice.reducer,
  },
});
