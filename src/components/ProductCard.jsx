import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalQuickView from "../components/ModalQuickView";
import starRating from "../assets/imgs/theme/rating-stars.png";
import { useDispatch } from "react-redux";
import { addToCartHandler } from "../redux/actions/cart/cartActions";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  console.log("hello, products are here");
  console.log(product);

  const dispatch = useDispatch();

  const [successToast, setSuccessToast] = useState("");
  const [errorToast, setErrorToast] = useState("");

  const cartHandler = async (item) => {
    const res = await dispatch(addToCartHandler(item));
    console.log(res);
    setSuccessToast(true);
    toast.success("Product added to cart", {
      position: "top-right",
    });
  };

  return (
    <div className="product-cart-wrap mb-30">
      <div className="product-img-action-wrap">
        <div className="product-img product-img-zoom">
          <Link to="/products/:id">
            <img className="default-img" src={product.productImage} alt="" />
          </Link>
        </div>
        <div className="product-action-1">
          <a aria-label="Add To Wishlist" className="action-btn">
            <i className="fi-rs-heart"></i>
          </a>
          <ModalQuickView product={product} />
        </div>
        <div className="product-badges product-badges-position product-badges-mrg">
          <span className={product.tag}>{product.tag}</span>
        </div>
      </div>
      <div className="product-content-wrap">
        <h2 className="text-center mt-3 mb-2">
          {" "}
          <Link to={`/products/${product._id}`}>{product.title}</Link>{" "}
        </h2>
        <div className="product-rate-cover flex-align-justify-center">
          <span>Customer Rating : </span>
          <div className="product-rate d-inline-block" style={{ backgroundImage: `url(${starRating})` }}>
            <div className="product-rating" style={{ width: `${20 * product.rating}%`, backgroundImage: `url(${starRating})` }}></div>
          </div>
          <span className="font-small ml-5 text-muted"> ({product.rating})</span>
        </div>
        <div className="product-rate-cover flex-align-justify-center">
          <span>Available Colors :</span>
          {product.colorsAvailable.map((color, index) => (
            <span key={index} className={`product-color-box product${color}`}></span>
          ))}
        </div>
        <div className="product-card-bottom">
          <div className="product-price">
            <span> &#8377; {product.SellingPrice}</span>
            <span className="old-price">&#8377;{product.SellingPrice}</span>
          </div>
          <div className="add-cart" onClick={() => cartHandler(product)}>
            <a className="add">
              <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;