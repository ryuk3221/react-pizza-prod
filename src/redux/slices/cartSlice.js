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

      //Нахожу элемент в корзине с такими же параметрами (type, size)
      const findedItem = state.cartItems.find(item => item.id == action.payload.id && item.type == action.payload.type && item.size == action.payload.size);
      //Если элемент с такими же параметрами (size, type) уже есть, увеличиваю счетчик
      if (findedItem) {
        findedItem.count++;
      }
      //Иначе добавляю
      else {
        //Пица на которую нажали
        state.cartItems.push(action.payload);
      }
      //Расчитываю итоговую сумму корзины
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    //Удаление элемента из корзины
    removeCartItem(state, action) {
      const pizzaIndex = state.cartItems.findIndex(pizza => pizza.id == action.payload.id && pizza.size == action.payload.size && pizza.type == action.payload.type);
      state.cartItems.splice(pizzaIndex, 1);
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
      const pizzaIndex = state.cartItems.findIndex(pizza => pizza.id == action.payload.id && pizza.size == action.payload.size && pizza.type == action.payload.type);
      state.cartItems[pizzaIndex].count++;
      //Обновляю итоговую сумму корзины
      // state.totalPrice += action.payload.price;
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    decrement(state, action) {
      const pizzaIndex = state.cartItems.findIndex(pizza => pizza.id == action.payload.id && pizza.size == action.payload.size && pizza.type == action.payload.type);
      state.cartItems[pizzaIndex].count--;
      //Обновляю итоговую сумму корзины
      // state.totalPrice -= action.payload.price;
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
      if (state.cartItems[pizzaIndex].count == 0) {
        state.cartItems.splice(pizzaIndex, 1);
      }
    }
  }
});

export const { addCartItem, removeCartItem, clearItems, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;