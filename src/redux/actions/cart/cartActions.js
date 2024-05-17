import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { ColorRing } from "react-loader-spinner";

// Function to add a product to the cart in local storage
// export const addToCart = (product,color,size,quantity) => {
//   // console.log(product,color,size,quantity)
//   // console.log(product)
//   // console.log(product.colorsAvailable[0])
//   // Get existing cart items from local storage or initialize an empty array
//   let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//   // Check if the product is already in the cart
//   const existingProductIndex = cartItems.findIndex((item) => item.productId === product.productId);

//   if (existingProductIndex !== -1) {
//     // If the product is already in the cart, increase its quantity
//     cartItems[existingProductIndex].quantity += 1;
//   } else {
//     // If the product is not in the cart, add it as a new item
//     cartItems.push({
//       productId: product._id,
//       quantity: quantity,
//       size:color ||product.sizesAvailable[0].size,
//       Color:size||product.colorsAvailable[0],
//       productImage: product.productImage,
//       price: product.SellingPrice,
//       title: product.title,
//     });
//   }

//   // Save the updated cart items back to local storage
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));

//   // Return the updated cart items
//   // console.log(cartItems);
//   return cartItems;
// };

// cartActions.js


export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ product, color, size, quantity }, { rejectWithValue }) => {
    try {
      const taxprice = product.SellingPrice <= 1000 ? ((product.SellingPrice * 0.12)).toFixed(0) : ((product.SellingPrice * 0.18)).toFixed(0);
      console.log(taxprice);
      
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      const existingProductIndex = cartItems.findIndex((item) => item.productId === product._id);
      
      if (existingProductIndex !== -1) {
        cartItems[existingProductIndex].quantity += quantity;
      } else {
        cartItems.push({
          productId: product._id,
          quantity: quantity,
          size: size || product.sizesAvailable[0].size,
          color: color || product.colorsAvailable[0],
          productImage: product.productImage,
          price: product.SellingPrice,
          tax: taxprice,
          title: product.title,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return cartItems;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Register action
// export const addToCartHandler = createAsyncThunk("products/addtocart", async (data, { rejectWithValue }) => {
//   try {
//     // Check if the user is authenticated
//     const localData = localStorage.getItem("userData");
//     if (localData) {
//       // User is authenticated, proceed with adding item to cart on server
//       const productId = data._id;
//       const token = JSON.parse(localData).token;
//       const config = {
//         headers: { 
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       };
//       // Send request to server to add item to cart
//       //   const res = await axios.post(`${baseUrl}/api/cart`, { productId }, config);
//       //   return res.data;
//       addToCart(data);
//       return JSON.parse(localStorage.getItem("cartItems"));
//     } else {
//       // User is not authenticated, add item to cart in local storage only
//       addToCart(data);
//       return JSON.parse(localStorage.getItem("cartItems"));
//     }
//   } catch (error) {
//     if (!error?.response) {
//       throw error;
//     }
//     return rejectWithValue(error?.response?.data);
//   }
// });
