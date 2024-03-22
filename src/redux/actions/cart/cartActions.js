import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";


// Register action
export const addToCartHandler = createAsyncThunk(
    "products/addtocart",
    async (data, { rejectWithValue }) => {
      try {
        const localData = localStorage.getItem("userData");
        const parsedData = JSON.parse(localData);
        const token = parsedData.token;
        console.log(token);
  
        if(!localData){
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
console.log(data)
  // Check if the product already exists in the cart
  const existingItemIndex = cartItems.findIndex(
    (item) => item._id === data._id
  );

  if (existingItemIndex !== -1) {
    // If the product already exists in the cart, do nothing
    return;
  }

  // If the product is not present in the cart, add it
  cartItems.push({ ...data, quantity: 1 });

  // Update cart items in local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
        }
        const productId=data._id;
        const config = {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          };
    
  
        // Send request to server to add items to cart
        const res = await axios.post(`${baseUrl}/api/cart`, productId, config);
        alert('Product added to cart!');
        // return res.data;
      } catch (error) {
        if (!error?.response) {
          throw error;
        }
        return rejectWithValue(error?.response?.data);
      }
    }
  );
  