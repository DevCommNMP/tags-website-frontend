import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";


// Register action
export const addToCartHandler = createAsyncThunk(
  "products/addtocart",

  
  async (productId, { rejectWithValue }) => {

    const localdata=localStorage.getItem("userData");
    const parsedData=JSON.getItem(localdata);
    const token=parsedData.token
    console.log(token);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(`${baseUrl}/api/cart`, productId, config);
     
      return res.data;
    } catch (error) {
      
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);