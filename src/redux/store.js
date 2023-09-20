import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./slices/filterSlice";
import paginationReducer from "./slices/paginationSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filterSliceReducer,
    paginationReducer,
    cartReducer
  },
});
