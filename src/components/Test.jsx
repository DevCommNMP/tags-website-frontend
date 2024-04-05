import { useState } from 'react';

const Test = ({ smallImageSrc, largeImageSrc, magnifyLevel }) => {
  const [isMagnified, setIsMagnified] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsMagnified(true);
  };

  const handleMouseLeave = () => {
    setIsMagnified(false);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setCursorPosition({ x, y });
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block', overflow: 'hidden' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img src={smallImageSrc} alt="Small Image" style={{ maxWidth: '100%' }} />
      {isMagnified && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '110%',
            width: `${magnifyLevel * 100}%`,
            height: `${magnifyLevel * 100}%`,
            backgroundSize: 'cover',
            backgroundImage: `url(${largeImageSrc})`,
            transform: `translate(-${cursorPosition.x * magnifyLevel * 100}%, -${cursorPosition.y * magnifyLevel * 100}%)`,
            zIndex: 9999,
          }}
        ></div>
      )}
    </div>
  );
};

export default Test;
