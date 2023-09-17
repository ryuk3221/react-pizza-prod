import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./slices/filterSlice";
import catalogSliceReducer from "./slices/catalogItemsSlice";

export const store = configureStore({
  reducer: {
    filterSliceReducer,
    catalogSliceReducer
  },
});
