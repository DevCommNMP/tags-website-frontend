import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, discount as globalDiscount } from "../../../utils/baseUrl";
import { ColorRing } from "react-loader-spinner";

const calculatePrice = (product) => {
  const sellingPrice = product.discount
    ? product.SellingPrice * (1 - product.discount / 100)
    : product.SellingPrice * (1 - globalDiscount / 100);

  const taxRate = sellingPrice <= 1000 ? 0.12 : 0.18;

  const finalPrice = (sellingPrice + sellingPrice * taxRate).toFixed(0);

  return finalPrice;
};

export const addToCart = (product, color, size, quantity, productCode) => {
  return async (dispatch) => {
    try {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const taxPrice = product.SellingPrice <= 1000
        ? (product.SellingPrice * 0.12).toFixed(0)
        : (product.SellingPrice * 0.18).toFixed(0);

      const existingProductIndex = cartItems.findIndex((item) => item.productId === product._id);

      if (existingProductIndex !== -1) {
        cartItems[existingProductIndex].quantity += 1;
      } else {
        cartItems.push({
          productId: product._id,
          quantity: quantity,
          size: size || (product.sizesAvailable.length > 0 ? product.sizesAvailable[0].size : null),
          color: color || (product.colorsAvailable.length > 0 ? product.colorsAvailable[0] : null),
          productImage: product.productImage,
          price: calculatePrice(product),
          tax: taxPrice,
          productCode: productCode,
          title: product.title,
        });
        // console.log(calculatePrice(product),taxPrice)
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      // Optionally dispatch an action to update the Redux store
      dispatch({ type: 'UPDATE_CART_ITEMS', payload: cartItems });

      return cartItems.length; // Returning the cart items length inside try block
    } catch (error) {
      // Handle the error more explicitly, e.g., logging or dispatching an error action
      console.error("Error adding to cart:", error);
      
      return 0; // Returning 0 if an error occurs
    }
  };
};
