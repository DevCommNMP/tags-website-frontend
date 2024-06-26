import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
//  fetching particular order

export const fetchOrder = createAsyncThunk("order/fetchOrder", async (orderId, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const res = await axios.get(`${baseUrl}/api/orders/${orderId}`, config);
      // console.log(res.data)
      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  });
  

  export const fetchOrderDetails = createAsyncThunk("order/fetchOrderDetails", async (orderId, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const res = await axios.get(`${baseUrl}/api/orders/orderDetails/${orderId}`, config);
     
      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  });
  