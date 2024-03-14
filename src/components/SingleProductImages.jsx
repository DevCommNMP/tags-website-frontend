import React, { useState } from 'react';
// import slick from 'slick-carousel';

import product161 from '../assets/imgs/shop/product-16-1.jpg';
import product162 from '../assets/imgs/shop/product-16-2.jpg';
import product163 from '../assets/imgs/shop/product-16-3.jpg';
import product164 from '../assets/imgs/shop/product-16-4.jpg';
import product165 from '../assets/imgs/shop/product-16-5.jpg';
import product166 from '../assets/imgs/shop/product-16-6.jpg';
import product167 from '../assets/imgs/shop/product-16-7.jpg';
import thumbnail3 from '../assets/imgs/shop/thumbnail-3.jpg';
import thumbnail4 from '../assets/imgs/shop/thumbnail-4.jpg';
import thumbnail5 from '../assets/imgs/shop/thumbnail-5.jpg';
import thumbnail6 from '../assets/imgs/shop/thumbnail-6.jpg';
import thumbnail7 from '../assets/imgs/shop/thumbnail-7.jpg';
import thumbnail8 from '../assets/imgs/shop/thumbnail-8.jpg';
import thumbnail9 from '../assets/imgs/shop/thumbnail-9.jpg';


const SingleProductImages = () => {
  const productImages = [
    product161,
    product162,
    product163,
    product164,
    product165,
    product166,
    product167
  ]; // Assuming these variables hold the image URLs

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
        <div className="detail-gallery">
          <span className="zoom-icon">
            <i className="fi-rs-search"></i>
          </span>
          <div className="product-image-slider">
            {productImages.map((image, index) => (
              <figure className="border-radius-10" key={index} onClick={() => handleImageChange(index)}>
                <img src={image} alt={`product image ${index}`} />
              </figure>
            ))}
          </div>
          <div className="slider-nav-thumbnails">
            {/* Thumbnails */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductImages;
