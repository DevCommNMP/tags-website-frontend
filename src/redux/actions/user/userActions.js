import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

export const veriffetchUserdetails = createAsyncThunk("/user", async (token, { rejectWithValue }) => {
  //   console.log(token); // Log the token for debugging purposes

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    // Since you're sending a POST request, you should include some data in the request body.
    // I'll assume an empty object '{}' for now. You can adjust this according to your API requirements.
    const res = await axios.post(`${baseUrl}/api/user`, {}, config);
    return res.data;
  } catch (error) {
    // If there's no response, rethrow the error
    if (!error.response) {
      throw error;
    }

    // If there's auserAcc response, reject with the response data
    return rejectWithValue(error.response.data);
  }
});

export const fetchUserDetails = createAsyncThunk("user/fetchUserDetails", async (userEmail, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };console.log(userEmail)

    const res = await axios.get(`${baseUrl}/api/data/user?userEmail=${userEmail}`, config);
     console.log(res.data)
    return res.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
