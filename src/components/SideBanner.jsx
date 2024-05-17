import { Link } from "react-router-dom";

const SideBanner = () => {
  return (
    <>
      <div className="banner-img style-2">
        <div className="banner-text">
          <h2 className="mb-100">Just Landed: Grab Offers Now!</h2>
          <a className="btn btn-xs">
            <Link to="/shop" className="btn btn-xs">
              Grab Now <i className="fi-rs-arrow-small-right"></i>
            </Link>
          </a>
        </div>
      </div>
    </>
  );
};

export default SideBanner;
