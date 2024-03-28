import sideBannerImg from "../../assets/imgs/banner/banner-11.webp";

const HeroSideBanner = () => {
  return (
    <>
      <div className="banner-img style-3 animated animated" style={{ backgroundImage: `url(${sideBannerImg})` }}>
        <div className="banner-text mt-50">
          <h2 className="mb-50">
            Delivered <br />
            to
            <span className="text-brand">
              your
              <br />
              home
            </span>
          </h2>
          <a className="btn btn-xs" href="/all-categories">
            Shop Now <i className="fi-rs-arrow-small-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSideBanner;
