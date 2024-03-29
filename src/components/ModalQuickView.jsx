/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import Slider from "react-slick";

import Modal from "react-bootstrap/Modal";

import product161 from "../assets/imgs/shop/product-16-1.jpg";
import product162 from "../assets/imgs/shop/product-16-2.jpg";
import product163 from "../assets/imgs/shop/product-16-3.jpg";
import product164 from "../assets/imgs/shop/product-16-4.jpg";
import product165 from "../assets/imgs/shop/product-16-5.jpg";
import product166 from "../assets/imgs/shop/product-16-6.jpg";
import product167 from "../assets/imgs/shop/product-16-7.jpg";

function ModalQuickView (props) {
  const productImages = [product161, product162, product163, product164, product165, product166, product167];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef();


  const product = props.product;


  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    sliderRef.current.slickGoTo(index);
  };

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
console.log("Hello from modal")
console.log(product.this)
  return (
    <>
      <a aria-label="Quick view" onClick={handleShow} className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
        <i className="fi-rs-eye"></i>
      </a>

      <Modal show={show} onHide={handleClose}>
        <div className="modal-content">
          <button className="btn-close" onClick={handleClose}></button>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                <div className="detail-gallery">
                  <div className="product-image-slider"></div>
                  <div className="slider-nav-thumbnails"></div>
                  <div className="product-image-slider">
                    <Slider ref={sliderRef} {...settings}>
                      {productImages.map((image, index) => (
                        <div key={index}>
                          <img src={image} alt={`product image ${index}`} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="slider-nav-thumbnails">
                    <Slider {...settingsThumb}>
                      {productImages.map((image, index) => (
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
                  <span className="stock-status out-stock"> Sale Off </span>
                  <h3 className="title-detail">
                    <a className="text-heading">Seeds of Change Organic Quinoa, Brown</a>
                  </h3>
                  <div className="product-detail-rating">
                    <div className="product-rate-cover text-end">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{ width: "90%" }}></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                    </div>
                  </div>
                  <div className="clearfix product-price-cover">
                    <div className="product-price primary-color float-left">
                      <span className="current-price text-brand">$38</span>
                      <span>
                        <span className="save-price font-md color3 ml-15">26% Off</span>
                        <span className="old-price font-md ml-15">$52</span>
                      </span>
                    </div>
                  </div>
                  <div className="detail-extralink mb-30">
                    <div className="detail-qty border radius">
                      <a className="qty-down">
                        <i className="fi-rs-angle-small-down"></i>
                      </a>
                      <span className="qty-val">1</span>
                      <a className="qty-up">
                        <i className="fi-rs-angle-small-up"></i>
                      </a>
                    </div>
                    <div className="product-extra-link2">
                      <button type="submit" className="button button-add-to-cart">
                        <i className="fi-rs-shopping-cart"></i>Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="font-xs">
                    <ul>
                      <li className="mb-5">
                        Vendor: <span className="text-brand">Nest</span>
                      </li>
                      <li className="mb-5">
                        MFG:<span className="text-brand"> Jun 4.2024</span>
                      </li>
                    </ul>
                  </div>
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
