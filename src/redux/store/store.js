import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth/authSlices";
import cartReducer from "../slices/cart/cartSlice";
import productReducer from "../slices/product/productsSlice";
import categoriesRedcer from "../slices/categoriesSlice/categoriesSlice";
import checkoutSlice from "../slices/checoutSlice/checkoutSlice";
import orderSlice from "../slices/order/orderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productReducer,
    categories: categoriesRedcer,
    checkout: checkoutSlice,
    order:orderSlice
  },
});

export default store;
