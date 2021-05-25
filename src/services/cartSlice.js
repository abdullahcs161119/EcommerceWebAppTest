import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart_products: [],
  },
  reducers: {
    addToCart: {
      reducer: (state, action) => {
        state.cart_products.push(action.payload);
      },
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
