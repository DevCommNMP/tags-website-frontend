/* eslint-disable react/prop-types */
import { useState,useEffect, useRef } from "react";
import Slider from "react-slick";
import { Slide, toast, ToastContainer } from "react-toastify";
// import { addToCartHandler } from "../redux/actions/cart/cartActions";
import Modal from "react-bootstrap/Modal";
import { addToCart } from "../redux/actions/cart/cartActions";
import { useDispatch } from "react-redux"; 
import { discount as globalDiscount} from "../utils/baseUrl";
function ModalQuickView(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const[itemQuantity,setItemQuantity]=useState(1);
  const [message,setMessage]=useState("");
  const sliderRef = useRef();
  // color, size, quantity,productCode
  const product = props.product;
  const dispatch = useDispatch();
const color=props.product.colorsAvailable[0];
const size=props.product.sizesAvailable[0].size;
const quantity=itemQuantity;
const code=props.product.productName;

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    sliderRef.current.slickGoTo(index);
  };
 
 const  cartButtonHandler=async()=>{

  const res = await dispatch(addToCart(product,color,size,quantity,code));
setMessage("Product Added to cart successfully!")
console.log(message)
 }
 const quantityIncHandler=()=>{
  setItemQuantity(itemQuantity+1);
 }

 const quantityDecHandler=()=>{
  if(itemQuantity<=1){
    return;
  }
  else{
    setItemQuantity(itemQuantity-1)
  }
 }

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsThumb = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// console.log(product)
useEffect(() => {
  setTimeout(() => {
    setMessage("")
  }, 5000);
}, [message])
// console.log(props)
const productPrice = props.product.discount
    ? props.product.SellingPrice * (1 - props.product.discount / 100)
    : props.product.SellingPrice * (1 - globalDiscount / 100);

    // console.log(productPrice)
  return (
    <>
    
      <a aria-label="Quick view" onClick={handleShow} className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
        <i className="fi-rs-eye"></i>
      </a>
      <Modal show={show} onHide={handleClose}>
          <button className="btn-close" onClick={handleClose}></button>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                <div className="detail-gallery">
                  <div className="product-image-slider"></div>
                  <div className="slider-nav-thumbnails"></div>
                  <div className="product-image-slider">
                    <Slider ref={sliderRef} {...settings}>
                      {product.productSubImages.map((image, index) => (
                        <div key={index}>
                          <img src={image} alt={`product image ${index}`} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="slider-nav-thumbnails">
                    <Slider {...settingsThumb}>
                      {product.productSubImages.map((image, index) => (
                        <div
                          key={index}
                          className={`thumbnail ${index === currentImageIndex ? "active" : ""}`}
                          onClick={() => handleThumbnailClick(index)}
                        >
                          <img src={image} alt={`thumbnail ${index}`} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="detail-info pr-30 pl-30">
                  {/* <span className="stock-status out-stock"> Sale Off </span> */}
                  <h3 className="title-detail">
                    <a className="text-heading">{product.title}</a>
                  </h3>
                  <div className="product-detail-rating">
                    <div className="product-rate-cover text-end">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{ width: "90%" }}></div>
                      </div>
                      <span className="font-small ml-5 " style={{color:"black",fontSize:20,float:"left"}}>Rating {product.rating}</span>
                    </div>
                  </div>
                  <div className="clearfix product-price-cover">
                    <div className="product-price primary-color float-left">
                    <span className="current-price text-brand"> &#8377;{(props.product.discount
    ? (props.product.SellingPrice * (1 - props.product.discount / 100))
    : (props.product.SellingPrice * (1 - globalDiscount / 100))) <= 1000
      ? ((props.product.discount
          ? (props.product.SellingPrice * (1 - props.product.discount / 100))
          : (props.product.SellingPrice * (1 - globalDiscount / 100))) * 1.12).toFixed(0)
      : ((props.product.discount
          ? (props.product.SellingPrice * (1 - props.product.discount / 100))
          : (props.product.SellingPrice * (1 - globalDiscount / 100))) * 1.18).toFixed(0)}
</span>                      <span>
                        <span className="save-price font-md color3 ml-15" style={{fontSize:20}}>{props.product.discount||globalDiscount}%off</span>
                        <span className="old-price font-md ml-15"></span>
                      </span>
                    </div>
                  </div>
                  <div className="detail-extralink mb-30">
                  <div className="detail-qty border radius">
    <a className="qty-down">
    {itemQuantity>=1 ?<i className="fi-rs-angle-small-down" onClick={quantityDecHandler} ></i>:""}  
    </a>
    <span className="qty-val">{itemQuantity}</span>
    <a className="qty-up">
      <i className="fi-rs-angle-small-up" onClick={quantityIncHandler}></i> 
    </a>
  </div>
  <div className="product-extra-link2">
    <button type="submit" className="button button-add-to-cart" onClick={cartButtonHandler}>
      <i className="fi-rs-shopping-cart"></i>Add to cart
    </button>

  </div>
  <div style={{border:"1px solid green",borderRadius:5}}>
    {message ?<h5 style={{color:"green",padding:10}}>{message}</h5>:""}
  </div>
                  </div>
                  <div className="font-xs">
                    <ul>
                      {/* <li className="mb-5">
                        Available Colours : {product.availableColors} <span className="text-brand">Nest</span>
                      </li>
                      <li className="mb-5">
                        MFG:<span className="text-brand"> Jun 4.2024</span>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Modal>
    </>
  );
}

export default ModalQuickView;
