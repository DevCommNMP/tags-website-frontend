import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, discount as globalDiscount } from "../../../utils/baseUrl";
import { ColorRing } from "react-loader-spinner";

const calculatePrice = (product) => {
  const sellingPrice = product.discount
    ? product.SellingPrice * (1 - product.discount / 100)
    : product.SellingPrice * (1 - globalDiscount / 100);

  const taxRate = sellingPrice <= 1000 ? 0.12 : 0.18;

  const finalPrice = (sellingPrice).toFixed(2);
// console.log(finalPrice)
  return finalPrice;
};
const calculateTax = (product) => {
  const sellingPrice = product.discount
    ? product.SellingPrice * (1 - product.discount / 100)
    : product.SellingPrice * (1 - globalDiscount / 100);

  const taxRate = sellingPrice <= 1000 ? 0.12 : 0.18;

  const tax = (sellingPrice*taxRate).toFixed(2);
// console.log(tax)
  return tax;
};

export const addToCart = (product, color, size, quantity, productCode) => {
  return async (dispatch) => {
    try {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      
      // Find index of existing product in cart
      const existingProductIndex = cartItems.findIndex(item => 
        item.productId === product._id && item.size === size && item.color === color
      );

      if (existingProductIndex !== -1) {
        // If product already exists in cart, increment quantity
        cartItems[existingProductIndex].quantity += quantity;
      } else {
        // If product does not exist in cart, add it
        cartItems.push({
          productId: product._id,
          product: product,
          quantity: quantity,
          size: size || 0,
          color: color || "",
          productImage: product.productImage,
          price: calculatePrice(product),
          tax: calculateTax(product),
          productCode: productCode,
          title: product.title,
        });
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