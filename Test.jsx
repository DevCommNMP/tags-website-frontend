// import React from 'react'
// import ReactImageMagnify from "react-image-magnify";
// import watchImg300 from "./src/components/im.jpg";



const Test = () => {
  return (
    <div>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: watchImg300,
          },
          largeImage: {
            src: watchImg300,
            width: 1200,
            height: 1800,
          },
        }}
      />
    </div>
  );
};

export default Test;
