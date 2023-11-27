import { configureStore } from "@reduxjs/toolkit";
import basketsSlice from "./basketSlice";
import authSlice from "./auth/authSlice";
import uiSlice from "./uiSlice";

export const store = configureStore({
  reducer: {
    basket: basketsSlice.reducer,
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
  },
});
