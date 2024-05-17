import side_white from "../assets/imgs/banner/side-white.avif";

const NewProducts = () => {
  return (
    <>
      <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
        <h5 className="section-title style-1 mb-30">New products</h5>
        <div className="single-post clearfix">
          <div className="image">
            <img src="assets/imgs/shop/thumbnail-3.jpg" alt="#" />
          </div>
          <div className="content pt-10">
            <h5>
              <a>Chen Cardigan</a>
            </h5>
            <p className="price mb-0 mt-5">$99.50</p>
            <div className="product-rate">
              <div className="product-rating" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>
        <div className="single-post clearfix">
          <div className="image">
            <img src="assets/imgs/shop/thumbnail-4.jpg" alt="#" />
          </div>
          <div className="content pt-10">
            <h6>
              <a>Chen Sweater</a>
            </h6>
            <p className="price mb-0 mt-5">$89.50</p>
            <div className="product-rate">
              <div className="product-rating" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
        <div className="single-post clearfix">
          <div className="image">
            <img src="assets/imgs/shop/thumbnail-5.jpg" alt="#" />
          </div>
          <div className="content pt-10">
            <h6>
              <a>Colorful Jacket</a>
            </h6>
            <p className="price mb-0 mt-5">$25</p>
            <div className="product-rate">
              <div className="product-rating" style={{ width: "60%" }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
        <img src={side_white} alt="" />
        <div className="banner-text">
          <h4>
            Save 17% <br />
            on <span className="text-brand">Oganic</span>
            <br />
            Juice
          </h4>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
