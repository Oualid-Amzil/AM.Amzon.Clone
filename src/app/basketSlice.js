import { createSlice } from "@reduxjs/toolkit";

const basketsSlice = createSlice({
  name: "search",
  initialState: {
    products: [],
  },
  reducers: {
    addbasketElement(state, action) {
      state.products = [action.payload, ...state.products];
    },
  },
});

export const basketActions = basketsSlice.actions;

export default basketsSlice;
