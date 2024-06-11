import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

export const CheckoutHandler = createAsyncThunk("api/checkout", async (_, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${baseUrl}/api/getkeys`, config);
    // console.log(data);
    const res = await axios.post(`${baseUrl}/api/checkout`, config); // Pass null as the request body since no data is being sent
    // console.log(res);
    return res.data;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});
