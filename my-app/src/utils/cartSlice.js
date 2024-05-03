import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount : 0,
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.items.push(tempProduct);
      }
      state.totalAmount += (action.payload.card.info.price) / 100;
      
    },
    removeItem: (state) => {
      const lastItem = state.items.pop();
      if (lastItem) {
        state.totalAmount -= lastItem.card.info.price / 100;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const exItem = state.items.find((item) => item.card.info.id === itemId);
      if (exItem) {
        exItem.quantity += 1;
        state.totalAmount += exItem.card.info.price / 100;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === itemId
      );
      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        item.quantity -= 1;
        state.totalAmount -= item.card.info.price / 100;
        if (item.quantity === 0) {
          state.items.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
