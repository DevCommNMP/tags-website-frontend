import { useState } from "react";
import { Link } from "react-router-dom";
import ModalQuickView from "../components/ModalQuickView";
import starRating from "../assets/imgs/theme/rating-stars.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart/cartActions";
import { ToastContainer } from "react-toastify";
// import Product from "../pages/product";
import dummyImg from "../assets/imgs/products/productdummyImg.jpg"
import { discount as globalDiscount } from "../utils/baseUrl";

const ProductCard = ({ product, toasterHandler }) => {
  const dispatch = useDispatch();

  const cartHandler = async (item) => {
    try {
      await dispatch(
        addToCart(
          item,
          item.colorsAvailable[0]|| null,
          item.sizesAvailable[0].size||0,
          1,
          item.productName
        )
      );
      toasterHandler();
    } catch (error) {
      // console.error("Error while adding to cart:", error);
      // You can add error handling or display a toast message here
    }
  };

  const productPrice = product.discount
  ? Math.round(product.SellingPrice * (1 - product.discount / 100))
  : Math.round(product.SellingPrice * (1 - globalDiscount / 100));




  
  return (
    <>
      {product.productSubImages && (
        <div className="product-cart-wrap mb-30">
          <div className="product-img-action-wrap">
            <div className="product-img product-img-zoom">
              <Link to={`/products/${product.slugTitle}`}>
                {product.productImage ? (
                  <img className="default-img" src={product.productImage} alt="" />
                ) : (
                  <img className="default-img" src={dummyImg} alt="" />
                )}
              </Link>
            </div>
            <div className="product-action-1">
              {/* <ModalQuickView product={product} /> */}
            </div>
            <div className="product-badges product-badges-position product-badges-mrg">
              <span className={product.tag}>{product.tag}</span>
            </div>
          </div>
          <div className="product-content-wrap">
            <h2 className="text-center mt-3 mb-2">
              {" "}
              <Link to={`/products/${product.slugTitle}`}>{product.title}</Link>{" "}
            </h2>
            <div className="product-rate-cover flex-align-justify-center">
              <span>Customer Rating : </span>
              <div className="product-rate d-inline-block" style={{ backgroundImage: `url(${starRating})` }}>
                <div className="product-rating" style={{ width: `${20 * product.rating}%`, backgroundImage: `url(${starRating})` }}></div>
              </div>
              <span className="font-small ml-5 text-muted"> ({(Math.random() * (4.8 - 3.5) + 3.5).toFixed(1)})</span>
              </div>
            <div className="product-rate-cover flex-align-justify-center">
              <span>Available Colors :</span>
              {product.colorsAvailable.map((color, index) => {
                // Create a valid CSS class name by replacing spaces, dots, and slashes with hyphens and making the string lowercase
                const colorClassName = color.replace(/[\s./]+/g, "-").toLowerCase();
                return (
                  <span
                    key={index}
                    className={`product-color-box product-${colorClassName}`}
                  ></span>
                );
              })}
            </div>
            <div className="product-card-bottom">
              <div className="product-price">
                <span>&#8377; {productPrice}</span>
                <span className="old-price">&#8377;{product.SellingPrice}</span>
              </div>
              <Link to={`/products/${product._id}`}>
              <div className="add-cart" >
                <a className="add">
                  <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                </a>
              </div>
              </Link>
             
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
