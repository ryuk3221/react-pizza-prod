import { createSlice } from "@reduxjs/toolkit"; 

//Элементы корзины
const initialState = {
  cartItems: [],
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) {
      const findedItem = state.cartItems.find(item => item.id === action.payload.id);
      if (findedItem) {
        findedItem.count++;
      }
      else {
        state.cartItems.push(action.payload);
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    removeCartItem(state, action) {
      state.cartItems = state.cartItems.filter((item) => action.payload !== item.id)
    },
    clearItems(state, action) {
      state.cartItems = [];
    }
  }
});

export const { addCartItem, removeCartItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;