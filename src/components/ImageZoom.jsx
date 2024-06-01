import React, { useState } from 'react';
import './ImageZoom.css';

const ImageZoom = ({ imageUrl }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setIsZoomed(true);
    updateZoomPosition(e);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e) => {
    if (isZoomed) {
      updateZoomPosition(e);
    }
  };

  const updateZoomPosition = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div
      className="image-zoom-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img src={imageUrl} alt="Product" className="product-image" />
      {isZoomed && (
        <img
          src={imageUrl}
          alt="Zoomed Product"
          className="zoomed-image"
          style={{
            transform: `translate(-${zoomPosition.x}%, -${zoomPosition.y}%) scale(2)`, // Scale factor can be adjusted
          }}
        />
      )}
    </div>
  );
};

export default ImageZoom;
