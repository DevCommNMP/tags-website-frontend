import { createSlice } from "@reduxjs/toolkit";
import { fetchUserDetails } from "../../actions/user/userActions";
import { fetchOrderDetails } from "../../actions/order/orderActions";

const initialState = {
  userdata: [],
  orderdata:[],
  loading: false,
  appErr: null,
  serverErr: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.appErr = null;
      state.serverErr = null;
    },
  },
  extraReducers: (builder) => {
    //fetching all datas
    builder.addCase(fetchUserDetails.pending, (state) => {
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.userdata = action.payload;
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action.payload?.message || "An error occurred";
      state.serverErr = action.payload?.message || "Network error";
    });

    builder.addCase(fetchOrderDetails.pending, (state) => {
        state.loading = true;
        state.appErr = null;
        state.serverErr = null;
      });
      builder.addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.orderdata = action.payload;
      });
      builder.addCase(fetchOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action.payload?.message || "An error occurred";
        state.serverErr = action.payload?.message || "Network error";
      });
  },
});

export const { clearErrors } = orderSlice.actions;
export default orderSlice.reducer;
