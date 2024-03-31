import { createSlice } from "@reduxjs/toolkit";
import { CheckoutHandler } from "../../actions/checkoutActions/checkoutActions";

const initialState = {
  checkoutdata:[],
  loading:false,
  appErr:"",
  serverErr:"",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.appErr = null;
      state.serverErr = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CheckoutHandler.pending, (state) => {
        state.loading = true;
        state.appErr = null;
        state.serverErr = null;
      })
      .addCase(CheckoutHandler.fulfilled, (state, action) => {
        state.loading = false;
        state.checkoutdata = action.payload;
        state.appErr = null;
        state.serverErr = null;
      })
      .addCase(CheckoutHandler.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action.payload?.message || "An error occurred";
        state.serverErr = action.payload?.message || "Network error";
      });
  },
});

export const { clearErrors } = checkoutSlice.actions;
export default checkoutSlice.reducer;
