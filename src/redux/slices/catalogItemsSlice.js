import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catalogPizzasItems: [],
};

const catalogItemsSlice = createSlice({
  name: "catalogItemsSlice",
  initialState,
  reducers: {
    setItems(state, action) {
      state.catalogPizzasItems = action.payload;
    }
  }
});

export const { setItems } = catalogItemsSlice.actions;

export default catalogItemsSlice.reducer;
