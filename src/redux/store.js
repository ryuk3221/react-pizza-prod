import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./slices/filterSlice";
import paginationReducer from "./slices/paginationSlice";

export const store = configureStore({
  reducer: {
    filterSliceReducer,
    paginationReducer
  },
});
