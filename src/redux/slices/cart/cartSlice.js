import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartLength:0,// Initial state should include cartItems array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // No need to return anything here, just modify the state
      state.cartLength = action.payload; // Update cartItems with the new payload
    },
   
  },
});

export const { addToCartSuccess, addToCartFailure } = cartSlice.actions;

export default cartSlice.reducer;
