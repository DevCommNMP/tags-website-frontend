import React, { useState, useRef } from 'react';
import Slider from 'react-slick';

const SingleProductImages = ({ product }) => {
  const { productImage, productSubImages } = product;

  // Ensure productImage and productSubImages are arrays
  const productImagesArr = Array.isArray(productImage) ? productImage : [];
  const productSubImagesArr = Array.isArray(productSubImages) ? productSubImages : [];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef();

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const settingsThumb = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
      <div className="detail-gallery">
        <div className="product-image-slider">
          <Slider ref={sliderRef} {...settings}>
            {/* Render main product image */}
            {productImagesArr.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`product image ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="slider-nav-thumbnails">
          <Slider {...settingsThumb}>
            {/* Render product sub-images */}
            {productSubImagesArr.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={image} alt={`thumbnail ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SingleProductImages;
