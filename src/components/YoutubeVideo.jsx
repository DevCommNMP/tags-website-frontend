const YoutubeVideo = () => {
  return (
    <div className="container mt-30 mb-30">
      <div className="row">
        <div className="col-md-4 col-12">
          <h3 className="mb-5 mt-25">Welcome to TagsFootwear</h3>
          <p className="mb-5">
            At TagsFootwear, we believe that every step matters. Step into style, comfort, and confidence with our exquisite collection of
            footwear exclusively designed for you. Our mission is to redefine the way you experience footwear by offering unparalleled
            quality, comfort, and style in every pair.
          </p>
          <h4 className="mb-5 mt-25">Why Choose Tags Footwear ? here is why </h4>
          <div className="row">
            <div className="col">
              <li>Quality and Comfort Combined</li>
              <li>Unparalleled Quality</li>
              <li>Comfort and Style</li>
              <li>Exceptional Support</li>
              <li>Flexible Outsoles</li>
            </div>
            <div className="col-6">
              <li>Endless Possibilities</li>
              <li>Unique Style and Personality</li>
              <li>Timeless Classics</li>
              <li>On-Trend Designs</li>
            </div>
          </div>
          <br />

          <p> Experience the ultimate blend of style, comfort, and quality</p>
        </div>

        <div className="text-center col-8">
          <iframe
            style={{ borderRadius: "20px", maxWidth: "100%"}}
            width="900"
            height="506"
            src="https://www.youtube.com/embed/Fw3bReDmHhw?si=i2CsCrcm7yMU8f-s"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            type="text/html"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
