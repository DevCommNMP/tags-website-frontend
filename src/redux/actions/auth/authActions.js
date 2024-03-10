import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import Cookies from 'js-cookie';
// Register action
export const registerUserAction = createAsyncThunk(
  "user/register",

  async (user, { rejectWithValue }) => {

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
export const loginUserAction = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(`${baseUrl}/api/auth/login`, userData, config);
      // Save response to local storage
      localStorage.setItem('userData', JSON.stringify(res.data));
      const authToken = Cookies.get('authToken');
      // console.log(authToken)
      console.log(res)
      return res.data;  
    } catch (error) {
     
      console.error(error);
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Logout action
export const logoutAction = createAsyncThunk(
  '/logout',
  async (payload, { rejectWithValue }) => {
    try {
      // Additional logic or API calls can be added here if needed
      localStorage.removeItem("userData");
    } catch (error) {
      console.error(error);
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);