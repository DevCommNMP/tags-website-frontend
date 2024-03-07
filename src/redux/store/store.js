import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth/authSlices';


const Store = configureStore({
  reducer: {
    auth: authReducer ,

  },
});

export default Store;