import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProductsAction } from "../../actions/product/productActions";

const initialState = {
  products: [],
  productsLoading: false,
  appErr: null,
  serverErr: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.appErr = null;
      state.serverErr = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProductsAction.pending, (state) => {
      state.productsLoading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(fetchAllProductsAction.fulfilled, (state, action) => {
      state.productsLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchAllProductsAction.rejected, (state, action) => {
      state.productsLoading = false;
      state.appErr = action.payload?.message || "An error occurred";
      state.serverErr = action.payload?.message || "Network error";
    });
  },
});

export const { clearErrors } = productSlice.actions;
export default productSlice.reducer;
