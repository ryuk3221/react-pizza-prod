import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catalogItems: [],
};

const catalogItemsSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalogItems(state, action) {
      state.catalogItems = action.payload;
    }
  }
});

export const { setCatalogItems } = catalogItemsSlice.actions;

export default catalogItemsSlice.reducer;