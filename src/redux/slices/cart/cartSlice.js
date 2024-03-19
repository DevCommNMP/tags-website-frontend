import { createSlice } from "@reduxjs/toolkit";
import { addToCartHandler } from "../../actions/cart/cartActions";



const initialState={
addedtocart:false,
  cartLoading: false,
  appErr: null,
  serverErr: null,
};
const authSlice = createSlice({
  name: "cart",
  initialState,
 
  reducers: {
    clearErrors: (state) => {
      state.appErr = null;
      state.serverErr = null;
    },
  },
  extraReducers: (builder) => {
    // Add to cart
    builder.addCase(addToCartHandler.pending, (state, action) => {
      state.cartLoading = true;
      state.addedtocart=false,
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(addToCartHandler.fulfilled, (state, action) => {
      state.cartLoading = false;
      state.addedtocart=false,
      state.registered = action?.payload;
    });
    builder.addCase(addToCartHandler.rejected, (state, action) => {
      state.cartLoading = false;
      state.appErr = action?.payload?.message || 'An error occurred';
      state.serverErr = action?.payload?.message || 'Network error';
    });

   
  },
});

export const { clearErrors } = authSlice.actions;
export default authSlice.reducer;