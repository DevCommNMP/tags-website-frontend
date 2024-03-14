import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="product-image-slider">
      {images.map((image, index) => (
        <figure className="border-radius-10" key={index} onClick={() => handleImageChange(index)}>
          <img src={image} alt={`product image ${index}`} />
        </figure>
      ))}
    </div>
  );
};

export default ImageCarousel;