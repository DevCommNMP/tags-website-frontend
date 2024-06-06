/* eslint-disable react/prop-types */
import { useState,useEffect, useRef } from "react";
import Slider from "react-slick";
import { Slide, toast, ToastContainer } from "react-toastify";
// import { addToCartHandler } from "../redux/actions/cart/cartActions";
import Modal from "react-bootstrap/Modal";
import { addToCart } from "../redux/actions/cart/cartActions";
import { useDispatch } from "react-redux"; 
import { discount as globalDiscount} from "../utils/baseUrl";
import { Link } from "react-router-dom";
function ModalQuickView(props) {

  
  const product = props.product;


 
 

// console.log(props)

    // console.log(productPrice)
  return (
    <>
    
      <Link to={`/products/${props.product._id}`} aria-label="Quick view"  className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
        <i className="fi-rs-eye"></i>
      </Link>
     
    </>
  );
}

export default ModalQuickView;
