import React from 'react';
import ImageCarousel from './ImageCarousel'; // Assuming you have this component in a separate file

const DetailGallery = () => {
  const productImages = [
    product161,
    product162,
    product163,
    product164,
    product165,
    product166,
    product167
  ]; // Assuming these variables hold the image URLs

  return (
    <div className="detail-gallery">
      <span className="zoom-icon">
        <i className="fi-rs-search"></i>
      </span>
      <ImageCarousel images={productImages} />
      <div className="slider-nav-thumbnails">
        {/* Thumbnails */}
      </div>
    </div>
  );
};

export default DetailGallery;
