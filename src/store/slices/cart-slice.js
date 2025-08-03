import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
      state.totalQuantity += 1;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.totalQuantity = state.items.length;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    }
  }
});
export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;