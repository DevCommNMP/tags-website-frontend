
// THIS COMPONENT IS NOT IN USE FOR NOW, HAVIING SOME ISSUES WITH PRODUCT DATA

import { Link } from "react-router-dom";
import ModalQuickView from "./ModalQuickView";
import starRating from "../assets/imgs/theme/rating-stars.png";


const ProductCard = (product) => {
  return (
    <>
      <div className="product-cart-wrap mb-30">
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <Link to="/products/dummy">
              <img className="default-img" src={product.productImage} alt="" />
            </Link>
          </div>
          <div className="product-action-1">
            <a aria-label="Add To Wishlist" className="action-btn">
              <i className="fi-rs-heart"></i>
            </a>
            <ModalQuickView />
          </div>
          <div className="product-badges product-badges-position product-badges-mrg">
            <span className={product.tag}>{product.tag}</span>
          </div>
        </div>
        <div className="product-content-wrap">
          <div className="product-category">{/* <a>Snack</a> */}</div>
          <h2>
            <Link to="/products/dummy">{product.title}</Link>
          </h2>
          <div className="product-rate-cover">
            <div className="product-rate d-inline-block" style={{ backgroundImage: `url(${starRating})` }}>
              <div className="product-rating" style={{ width: `${20 * product.rating}%`, backgroundImage: `url(${starRating})` }}></div>
            </div>
            <span className="font-small ml-5 text-muted"> ({product.rating})</span>
          </div>
          <div>
            <span className="font-small text-muted">{/* By <a>NestFood</a> */}</span>
          </div>
          <div className="product-card-bottom">
            <div className="product-price">
              <span>&#8377;{product.SellingPrice}</span>
              <span className="old-price">&#8377;{product.SellingPrice}</span>
            </div>
            <div className="add-cart">
              <a className="add">
                <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
