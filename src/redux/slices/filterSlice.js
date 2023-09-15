import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filterIndex: 0,
}

export const filterIndexSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    handleChangeFilterIndex: (state, index) => {
      state.filterIndex += index.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { handleChangeFilterIndex } = filterIndexSlice.actions

export default filterIndexSlice.reducer