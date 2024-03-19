import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth/authSlices';
import cartReducer from "../slices/cart/cartSlice";

const Store = configureStore({
  reducer: {
    auth: authReducer ,
cart:cartReducer,
  },
});

export default Store;