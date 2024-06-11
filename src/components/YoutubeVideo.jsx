import videoSrc from "../assets/videos/video.mp4";

const YoutubeVideo = () => {
  return (
    <div className="container mt-30 mb-30">
      <div className="row">
        <div className="col-md-4 col-12">
          <h3 className="mb-5 mt-25">Welcome to TAGS Footwear</h3>
          <p className="mb-5">
            At TAGS Footwear, we believe that every step matters. Step into Style, Comfort, and Confidence with our exquisite collection of
            footwear exclusively designed for you. Our mission is to redefine the way you experience footwear by offering unparalleled
            quality, Comfort, and Style in every pair.
          </p>
          <h4 className="mb-5 mt-25">Why Choose TAGS  Footwear? Here&apos;s why:</h4>
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
          <p>Experience the ultimate blend of Style, Comfort, and quality.</p>
        </div>

        <div className="text-center col-12 col-md-8 youtube-wrapper">
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
