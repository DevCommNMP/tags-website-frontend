import videoSrc from "../assets/videos/video.mp4";

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
          <h4 className="mb-5 mt-25">Why Choose Tags Footwear? Here's why:</h4>
          <div className="row">
            <div className="col">
              <ul>
                <li>Quality and Comfort Combined</li>
                <li>Unparalleled Quality</li>
                <li>Comfort and Style</li>
                <li>Exceptional Support</li>
                <li>Flexible Outsoles</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Endless Possibilities</li>
                <li>Unique Style and Personality</li>
                <li>Timeless Classics</li>
                <li>On-Trend Designs</li>
              </ul>
            </div>
          </div>
          <p>Experience the ultimate blend of style, comfort, and quality.</p>
        </div>

        <div className="text-center col-8">
          <video
            style={{ borderRadius: "20px", maxWidth: "100%" }}
            width="900"
            height="506"
            src={videoSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            autoPlay
            controls // Added controls attribute to show all controls
            allowFullScreen
          ></video>
        </div>

      </div>
    </div>
  );
};

export default YoutubeVideo;
