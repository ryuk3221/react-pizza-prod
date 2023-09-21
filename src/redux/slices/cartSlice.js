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
    //Добавление в корзину
    addCartItem(state, action) {
      //Нахожу нужный элемент корзины по id 
      const findedItem = state.cartItems.find(item => item.id === action.payload.id);
      //Если элемент найден увеличваю счетчик
      if (findedItem) {
        findedItem.count++;
      }
      //Иначе добавляю
      else {
        state.cartItems.push(action.payload);
      }
      //Расчитываю итоговую сумму корзины
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    //Удаление элемента из корзины
    removeCartItem(state, action) {
      state.cartItems = state.cartItems.filter((item) => action.payload.id !== item.id);
      //Обновляю итоговую сумму корзины
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    //Отчищаю всю корзину
    clearItems(state) {
      state.cartItems = [];
      //Обновляю итоговую сумму корзины
      state.totalPrice = 0;
    },
    increment(state, action) {
      //Нахожу нужный элемент
      const findedItem = state.cartItems.find(item => item.id === action.payload.id);
      findedItem.count++;
      //Обновляю итоговую сумму корзины
      state.totalPrice += action.payload.price;
    },
    decrement(state, action) {
      //Нахожу нужный элемент
      const findedItem = state.cartItems.find(item => item.id === action.payload.id);
      findedItem.count--;
      state.totalPrice -= action.payload.price;
      if (findedItem.count == 0) {
        state.cartItems = state.cartItems.filter((item) => action.payload.id !== item.id);
      }
    }
  }
});

export const { addCartItem, removeCartItem, clearItems, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;