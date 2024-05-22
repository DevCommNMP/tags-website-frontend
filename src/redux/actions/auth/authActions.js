import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import Cookies from "js-cookie";

// Register action
export const registerUserAction = createAsyncThunk(
  "user/register",

  async (user, { rejectWithValue }) => {
    // if()
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(`${baseUrl}/api/auth/register`, user, config);
      return res.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);


// Login action
export const loginUserAction = createAsyncThunk("user/login", async (userData, { rejectWithValue }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // console.log(userData)
  try {
    const res = await axios.post(`${baseUrl}/api/auth/login`, userData, config, {
      withCredentilas: true,
    });
    // Save response to local storage

    localStorage.setItem("userData", JSON.stringify(res.data));
    const authToken = Cookies.get("token");
    return res.data;
  } catch (error) {
    console.error(error);
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});
export const verifyEmail = createAsyncThunk("user/verifyemail", async (token, { rejectWithValue }) => {
  console.log(token); // Log the token for debugging purposes

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    // Since you're sending a POST request, you should include some data in the request body.
    // I'll assume an empty object '{}' for now. You can adjust this according to your API requirements.
    const res = await axios.post(`${baseUrl}/api/verify-account`, {}, config);
    return res.data;
  } catch (error) {
    // If there's no response, rethrow the error
    if (!error.response) {
      throw error;
    }

    // If there's a response, reject with the response data
    return rejectWithValue(error.response.data);
  }
});



export const verifyResetPasswordToken = createAsyncThunk(
  "user/verify-reset-token",
  async ({token}, { rejectWithValue }) => {
    // console.log(token)
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      // Since you're sending a GET request, you don't need to include data in the request body
      const res = await axios.get(`${baseUrl}/api/verify-reset-Password-Token`, config);
      console.log(res.data)
      return res.data;
    } catch (error) {
      // If there's no response, rethrow the error
      if (!error.response) {
        throw error;
      }

      // If there's a response, reject with the response data
      return rejectWithValue(error.response.data);
    }
  }
);


export const updatePassword = createAsyncThunk(
  "user/reset-password",
  async (data, { rejectWithValue }) => {
    const { password, token } = data;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      // Send a POST request to update the password
      const res = await axios.post(`${baseUrl}/api/reset-password`, { password }, config);
      console.log(res)
      // Return the response data
      return res.data;
    } catch (error) {
      // Handle any errors and return the error response
      return rejectWithValue(error.response.data);
    }
  }
);






// Logout action
export const logoutAction = createAsyncThunk("/logout", async (payload, { rejectWithValue }) => {
  try {
    // Additional logic or API calls can be added here if needed
    await localStorage.removeItem("userData");
  } catch (error) {
    console.error(error);
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});
