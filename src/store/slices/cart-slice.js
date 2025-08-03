import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    items: [], // كل عنصر سيكون له quantity
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
    },

    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
  const item = state.items.find(item => item.id === action.payload);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
    state.totalQuantity -= 1;
  } else if (item && item.quantity === 1) {
    state.items = state.items.filter(i => i.id !== item.id);
    state.totalQuantity -= 1;
  }
},

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;