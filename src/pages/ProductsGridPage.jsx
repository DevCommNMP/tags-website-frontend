import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Header from "../components/Header/Header";
import { Link, useParams } from 'react-router-dom';
const ProductsGridPage = ({ data }) => {
  
  
  const { title } = useParams()
  console.log(
    title
  )
  // console.log(data)  
  
  const [sliderValues, setSliderValues] = useState([0, 100]);

  // Function to handle slider change
  const handleSliderChange = (values) => {
    setSliderValues(values);
  };

  const handleSliderClick = (e) => {
    // Ensure that sliderValues is an array
    if (!Array.isArray(sliderValues)) return;

    // Calculate the clicked position relative to the slider track
    const trackRect = e.target.getBoundingClientRect();
    const clickedPosition = e.clientX - trackRect.left;
    const sliderWidth = trackRect.width;
    
    // Calculate the corresponding value based on the clicked position
    const valueClicked = (clickedPosition / sliderWidth) * 100;

    // Update the slider values
    const newValue = [Math.round(valueClicked), sliderValues[1]];
    setSliderValues(newValue);
  };


  return (
    <div>
      <div>
        <div
          className="modal fade custom-modal"
          id="quickViewModal"
          tabIndex="-1"
          aria-labelledby="quickViewModalLabel"
          aria-hidden="true"
        >
        </div>
        <header className="header-area header-style-1 header-height-2">
          <div className="mobile-promotion">
            <span>
              Grand opening, <strong>up to 15%</strong> off all items. Only{" "}
              <strong>3 days</strong> left
            </span>
          </div>
          <Header />
          <div className="header-bottom header-bottom-bg-color sticky-bar">
            <div className="container">
            </div>
          </div>
        </header>
        <main className="main">
          <div className="page-header mt-30 mb-50">
            <div className="container">
              <div className="archive-header">
                <div className="row align-items-center">
                  <div className="col-xl-3">
                    <h1 className="mb-15">{title}</h1>
                    <div className="breadcrumb">
                      <a href="index.html" rel="nofollow">
                        <i className="fi-rs-home mr-5"></i>Home
                      </a>
                      <span></span> Shop <span></span> {title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-30">
            <div className="row flex-row-reverse">
              <div className="col-lg-4-5">
                <div className="shop-product-fillter">
                  <div className="totall-product">
                    <p>
                      We found <strong className="text-brand">{data.length}</strong> items
                      for you!
                    </p>
                  </div>
                  <div className="sort-by-product-area">
                    <div className="sort-by-cover mr-10">
                      <div className="sort-by-product-wrap">
                        <div className="sort-by">
                          <span>
                            <i className="fi-rs-apps"></i>Show:
                          </span>
                        </div>
                        <div className="sort-by-dropdown-wrap">
                          <span>
                            {" "}
                            50 <i className="fi-rs-angle-small-down"></i>
                          </span>
                        </div>
                      </div>
                      <div className="sort-by-dropdown">
                        <ul>
                          <li>
                            <a className="active" href="#">
                              50
                            </a>
                          </li>
                          <li>
                            <a href="#">100</a>
                          </li>
                          <li>
                            <a href="#">150</a>
                          </li>
                          <li>
                            <a href="#">200</a>
                          </li>
                          <li>
                            <a href="#">All</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sort-by-cover">
                      <div className="sort-by-product-wrap">
                        <div className="sort-by">
                          <span>
                            <i className="fi-rs-apps-sort"></i>Sort by:
                          </span>
                        </div>
                        <div className="sort-by-dropdown-wrap">
                          <span>
                            {" "}
                            Featured <i className="fi-rs-angle-small-down"></i>
                          </span>
                        </div>
                      </div>
                      <div className="sort-by-dropdown">
                        <ul>
                          <li>
                            <a className="active" href="#">
                              Featured
                            </a>
                          </li>
                          <li>
                            <a href="#">Price: Low to High</a>
                          </li>
                          <li>
                            <a href="#">Price: High to Low</a>
                          </li>
                          <li>
                            <a href="#">Release Date</a>
                          </li>
                          <li>
                            <a href="#">Avg. Rating</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row product-grid">
                {data.map(product=>{
  return(
    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img
                              className="default-img"
                              src={product.image}
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-1-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="shop-wishlist.html"
                          >
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="shop-compare.html"
                          >
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">
                            
                            {product.name}
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: '90%' }}
                            ></div>
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            {/* By <a href="vendor-details-1.html">NestFood</a> */}
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>$28.85</span>
                            <span className="old-price">$32.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
  )
  })}
                </div>
                <div className="pagination-area mt-20 mb-20">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-start">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="fi-rs-arrow-small-left"></i>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link dot" href="#">
                          ...
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          6
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="fi-rs-arrow-small-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <section className="section-padding pb-5">
                  <div className="section-title">
                    <h3 className="">Deals Of The Day</h3>
                    <a className="show-all" href="shop-grid-right.html">
                      All Deals
                      <i className="fi-rs-angle-right"></i>
                    </a>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="product-cart-wrap style-2">
                        <div className="product-img-action-wrap">
                          <div className="product-img">
                            <a href="shop-product-right.html">
                              <img
                                src="assets/imgs/banner/banner-5.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="deals-countdown-wrap">
                            <div
                              className="deals-countdown"
                              data-countdown="2025/03/25 00:00:00"
                            ></div>
                          </div>
                          <div className="deals-content">
                            <h2>
                              <a href="shop-product-right.html">
                                Seeds of Change Organic Quinoa, Brown
                              </a>
                            </h2>
                            <div className="product-rate-cover">
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: '90%' }}
                                ></div>
                              </div>
                              <span className="font-small ml-5 text-muted">
                                {" "}
                                (4.0)
                              </span>
                            </div>
                            <div>
                              <span className="font-small text-muted">
                                By <a href="vendor-details-1.html">NestFood</a>
                              </span>
                            </div>
                            <div className="product-card-bottom">
                              <div className="product-price">
                                <span>$32.85</span>
                                <span className="old-price">$33.8</span>
                              </div>
                              <div className="add-cart">
                                <a className="add" href="shop-cart.html">
                                  <i className="fi-rs-shopping-cart mr-5"></i>
                                  Add{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="product-cart-wrap style-2">
                        <div className="product-img-action-wrap">
                          <div className="product-img">
                            <a href="shop-product-right.html">
                              <img
                                src="assets/imgs/banner/banner-6.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="deals-countdown-wrap">
                            <div
                              className="deals-countdown"
                              data-countdown="2026/04/25 00:00:00"
                            ></div>
                          </div>
                          <div className="deals-content">
                            <h2>
                              <a href="shop-product-right.html">
                                Perdue Simply Smart Organics Gluten
                              </a>
                            </h2>
                            <div className="product-rate-cover">
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: '90%' }}
                                ></div>
                              </div>
                              <span className="font-small ml-5 text-muted">
                                {" "}
                                (4.0)
                              </span>
                            </div>
                            <div>
                              <span className="font-small text-muted">
                                By{" "}
                                <a href="vendor-details-1.html">Old El Paso</a>
                              </span>
                            </div>
                            <div className="product-card-bottom">
                              <div className="product-price">
                                <span>$24.85</span>
                                <span className="old-price">$26.8</span>
                              </div>
                              <div className="add-cart">
                                <a className="add" href="shop-cart.html">
                                  <i className="fi-rs-shopping-cart mr-5"></i>
                                  Add{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 d-none d-lg-block">
                      <div className="product-cart-wrap style-2">
                        <div className="product-img-action-wrap">
                          <div className="product-img">
                            <a href="shop-product-right.html">
                              <img
                                src="assets/imgs/banner/banner-7.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="deals-countdown-wrap">
                            <div
                              className="deals-countdown"
                              data-countdown="2027/03/25 00:00:00"
                            ></div>
                          </div>
                          <div className="deals-content">
                            <h2>
                              <a href="shop-product-right.html">
                                Signature Wood-Fired Mushroom
                              </a>
                            </h2>
                            <div className="product-rate-cover">
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: '80%' }}
                                ></div>
                              </div>
                              <span className="font-small ml-5 text-muted">
                                {" "}
                                (3.0)
                              </span>
                            </div>
                            <div>
                              <span className="font-small text-muted">
                                By <a href="vendor-details-1.html">Progresso</a>
                              </span>
                            </div>
                            <div className="product-card-bottom">
                              <div className="product-price">
                                <span>$12.85</span>
                                <span className="old-price">$13.8</span>
                              </div>
                              <div className="add-cart">
                                <a className="add" href="shop-cart.html">
                                  <i className="fi-rs-shopping-cart mr-5"></i>
                                  Add{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 d-none d-xl-block">
                      <div className="product-cart-wrap style-2">
                        <div className="product-img-action-wrap">
                          <div className="product-img">
                            <a href="shop-product-right.html">
                              <img
                                src="assets/imgs/banner/banner-8.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="deals-countdown-wrap">
                            <div
                              className="deals-countdown"
                              data-countdown="2025/02/25 00:00:00"
                            ></div>
                          </div>
                          <div className="deals-content">
                            <h2>
                              <a href="shop-product-right.html">
                                Simply Lemonade with Raspberry Juice
                              </a>
                            </h2>
                            <div className="product-rate-cover">
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: '80%' }}
                                ></div>
                              </div>
                              <span className="font-small ml-5 text-muted">
                                {" "}
                                (3.0)
                              </span>
                            </div>
                            <div>
                              <span className="font-small text-muted">
                                By <a href="vendor-details-1.html">Yoplait</a>
                              </span>
                            </div>
                            <div className="product-card-bottom">
                              <div className="product-price">
                                <span>$15.85</span>
                                <span className="old-price">$16.8</span>
                              </div>
                              <div className="add-cart">
                                <a className="add" href="shop-cart.html">
                                  <i className="fi-rs-shopping-cart mr-5"></i>
                                  Add{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                <div className="sidebar-widget widget-category-2 mb-30">
                  <h5 className="section-title style-1 mb-30">Category</h5>
                  <ul>
                    <Link to="/categories/casual Shoes">
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="assets/imgs/theme/icons/category-1.svg"
                            alt=""
                          />
                          Casual Shoes
                        </a>
                        {/* <span className="count">30</span> */}
                      </li>
                    </Link>
                    <Link to="/categories/Ethnic Shoes">
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="assets/imgs/theme/icons/category-1.svg"
                            alt=""
                          />
                          Ethnic Shoes
                        </a>
                        {/* <span className="count">30</span> */}
                      </li>
                    </Link>
                    <Link to="/categories/Formal Shoes">
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="assets/imgs/theme/icons/category-1.svg"
                            alt=""
                          />
                          Formal Shoes
                        </a>
                        {/* <span className="count">30</span> */}
                      </li>
                    </Link>
                    <Link to="/categories/Party Shoes">
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="assets/imgs/theme/icons/category-1.svg"
                            alt=""
                          />
                          Party Shoes
                        </a>
                        {/* <span className="count">30</span> */}
                      </li>
                    </Link>
                    <Link to="/categories/Sports Shoes">
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="assets/imgs/theme/icons/category-1.svg"
                            alt=""
                          />
                          Sports Shoes
                        </a>
                        {/* <span className="count">30</span> */}
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="sidebar-widget price_range range mb-30">
                  <h5 className="section-title style-1 mb-30">Fill by price</h5>
                  <div className="price-filter">
                    <div className="price-filter-inner">
                      <Slider
                        min={0}
                        max={100}
                        value={sliderValues}
                        onChange={handleSliderChange}
                        onClick={handleSliderClick}
                        range
                      />
                      <div className="d-flex justify-content-between">
                        <div className="caption">
                          From: <strong className="text-brand">{sliderValues[0]}</strong>
                        </div>
                        <div className="caption">
                          To: <strong className="text-brand">{sliderValues[1]}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="price-filter">
                    <div className="price-filter-inner">
                      <div id="slider-range" className="mb-20"></div>
                      <div className="d-flex justify-content-between">
                        <div className="caption">
                          From:{" "}
                          <strong
                            id="slider-range-value1"
                            className="text-brand"
                          ></strong>
                        </div>
                        <div className="caption">
                          To:{" "}
                          <strong
                            id="slider-range-value2"
                            className="text-brand"
                          ></strong>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="list-group">
                    <div className="list-group-item mb-10 mt-10">
                      <label className="fw-900">Color</label>
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox1"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox1"
                        >
                          <span>Red (56)</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox2"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox2"
                        >
                          <span>Green (78)</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox3"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox3"
                        >
                          <span>Blue (54)</span>
                        </label>
                      </div>
                      <label className="fw-900 mt-15">Item Condition</label>
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox11"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox11"
                        >
                          <span>New (1506)</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox21"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox21"
                        >
                          <span>Refurbished (27)</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox31"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox31"
                        >
                          <span>Used (45)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <a
                    className="btn btn-sm btn-default"
                    href="shop-grid-right.html"
                  >
                    <i className="fi-rs-filter mr-5"></i> Fillter
                  </a>
                </div>
                <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                  <h5 className="section-title style-1 mb-30">New products</h5>
                  <div className="single-post clearfix">
                    <div className="image">
                      <img src="assets/imgs/shop/thumbnail-3.jpg" alt="#" />
                    </div>
                    <div className="content pt-10">
                      <h5>
                        <a href="shop-product-detail.html">Chen Cardigan</a>
                      </h5>
                      <p className="price mb-0 mt-5">$99.50</p>
                      <div className="product-rate">
                        <div
                          className="product-rating"
                          style={{ width: '90%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="single-post clearfix">
                    <div className="image">
                      <img src="assets/imgs/shop/thumbnail-4.jpg" alt="#" />
                    </div>
                    <div className="content pt-10">
                      <h6>
                        <a href="shop-product-detail.html">Chen Sweater</a>
                      </h6>
                      <p className="price mb-0 mt-5">$89.50</p>
                      <div className="product-rate">
                        <div
                          className="product-rating"
                          style={{ width: '80%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="single-post clearfix">
                    <div className="image">
                      <img src="assets/imgs/shop/thumbnail-5.jpg" alt="#" />
                    </div>
                    <div className="content pt-10">
                      <h6>
                        <a href="shop-product-detail.html">Colorful Jacket</a>
                      </h6>
                      <p className="price mb-0 mt-5">$25</p>
                      <div className="product-rate">
                        <div
                          className="product-rating"
                          style={{ width: '60%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                  <img src="assets/imgs/banner/banner-11.png" alt="" />
                  <div className="banner-text">
                    <span>Oganic</span>
                    <h4>
                      Save 17% <br />
                      on <span className="text-brand">Oganic</span>
                      <br />
                      Juice
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="main">
          <section className="newsletter mb-15">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="position-relative newsletter-inner">
                    <div className="newsletter-content">
                      <h2 className="mb-20">
                        Stay home & get your daily <br />
                        needs from our shop
                      </h2>
                      <p className="mb-45">
                        Start Your Daily Shopping with{" "}
                        <span className="text-brand">Nest Mart</span>
                      </p>
                      <form className="form-subcriber d-flex">
                        <input type="email" placeholder="Your emaill address" />
                        <button className="btn" type="submit">
                          Subscribe
                        </button>
                      </form>
                    </div>
                    <img
                      src="assets/imgs/banner/banner-9.png"
                      alt="newsletter"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="featured section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                  <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
                    <div className="banner-icon">
                      <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />
                    </div>
                    <div className="banner-text">
                      <h3 className="icon-box-title">Best prices & offers</h3>
                      <p>Orders $50 or more</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
                    <div className="banner-icon">
                      <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />
                    </div>
                    <div className="banner-text">
                      <h3 className="icon-box-title">Free delivery</h3>
                      <p>24/7 amazing services</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
                    <div className="banner-icon">
                      <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />
                    </div>
                    <div className="banner-text">
                      <h3 className="icon-box-title">Great daily deal</h3>
                      <p>When you sign up</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
                    <div className="banner-icon">
                      <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />
                    </div>
                    <div className="banner-text">
                      <h3 className="icon-box-title">Wide assortment</h3>
                      <p>Mega Discounts</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
                    <div className="banner-icon">
                      <img src="assets/imgs/theme/icons/icon-5.svg" alt="" />
                    </div>
                    <div className="banner-text">
                      <h3 className="icon-box-title">Easy returns</h3>
                      <p>Within 30 days</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                  <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
                    <div className="banner-icon">
                      <img src="assets/imgs/theme/icons/icon-6.svg" alt="" />
                    </div>
                    <div className="banner-text">
                      <h3 className="icon-box-title">Safe delivery</h3>
                      <p>Within 30 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-padding footer-mid">
            <div className="container pt-15 pb-20">
              <div className="row">
                <div className="col">
                  <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                    <div className="logo mb-30">
                      <a className="mb-15" href="index.html">
                        <img src="assets/imgs/theme/logo.svg" alt="logo" />
                      </a>
                      <p className="font-lg text-heading">
                        Awesome grocery store website template
                      </p>
                    </div>
                    <ul className="contact-infor">
                      <li>
                        <img
                          src="assets/imgs/theme/icons/icon-location.svg"
                          alt=""
                        />
                        <strong>Address: </strong>{" "}
                        <span>
                          5171 W Campbell Ave undefined Kent, Utah 53127 United
                          States
                        </span>
                      </li>
                      <li>
                        <img
                          src="assets/imgs/theme/icons/icon-contact.svg"
                          alt=""
                        />
                        <strong>Call Us:</strong>
                        <span>(+91) - 540-025-124553</span>
                      </li>
                      <li>
                        <img
                          src="assets/imgs/theme/icons/icon-email-2.svg"
                          alt=""
                        />
                        <strong>Email:</strong>
                        <span>sale@Nest.com</span>
                      </li>
                      <li>
                        <img
                          src="assets/imgs/theme/icons/icon-clock.svg"
                          alt=""
                        />
                        <strong>Hours:</strong>
                        <span>10:00 - 18:00, Mon - Sat</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-link-widget col">
                  <h4 className="widget-title">Company</h4>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-link-widget col">
                  <h4 className="widget-title">Account</h4>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <a href="#">Sign In</a>
                    </li>
                    <li>
                      <a href="#">View Cart</a>
                    </li>
                    <li>
                      <a href="#">My Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Track My Order</a>
                    </li>
                    <li>
                      <a href="#">Help Ticket</a>
                    </li>
                    <li>
                      <a href="#">Shipping Details</a>
                    </li>
                    <li>
                      <a href="#">Compare products</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-link-widget col">
                  <h4 className="widget-title">Corporate</h4>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <a href="#">Become a Vendor</a>
                    </li>
                    <li>
                      <a href="#">Affiliate Program</a>
                    </li>
                    <li>
                      <a href="#">Farm Business</a>
                    </li>
                    <li>
                      <a href="#">Farm Careers</a>
                    </li>
                    <li>
                      <a href="#">Our Suppliers</a>
                    </li>
                    <li>
                      <a href="#">Accessibility</a>
                    </li>
                    <li>
                      <a href="#">Promotions</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-link-widget col">
                  <h4 className="widget-title">Popular</h4>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <a href="#">Milk & Flavoured Milk</a>
                    </li>
                    <li>
                      <a href="#">Butter and Margarine</a>
                    </li>
                    <li>
                      <a href="#">Eggs Substitutes</a>
                    </li>
                    <li>
                      <a href="#">Marmalades</a>
                    </li>
                    <li>
                      <a href="#">Sour Cream and Dips</a>
                    </li>
                    <li>
                      <a href="#">Tea & Kombucha</a>
                    </li>
                    <li>
                      <a href="#">Cheese</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-link-widget widget-install-app col">
                  <h4 className="widget-title">Install App</h4>
                  <p className="wow fadeIn animated">
                    From App Store or Google Play
                  </p>
                  <div className="download-app">
                    <a href="#" className="hover-up mb-sm-2 mb-lg-0">
                      <img
                        className="active"
                        src="assets/imgs/theme/app-store.jpg"
                        alt=""
                      />
                    </a>
                    <a href="#" className="hover-up mb-sm-2">
                      <img src="assets/imgs/theme/google-play.jpg" alt="" />
                    </a>
                  </div>
                  <p className="mb-20">Secured Payment Gateways</p>
                  <img
                    className="wow fadeIn animated"
                    src="assets/imgs/theme/payment-method.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="container pb-30">
            <div className="row align-items-center">
              <div className="col-12 mb-30">
                <div className="footer-bottom"></div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <p className="font-sm mb-0">
                  &copy; 2024, <strong className="text-brand">Nest</strong> -
                  HTML Ecommerce Template <br />
                  All rights reserved
                </p>
              </div>
              <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                <div className="hotline d-lg-inline-flex mr-30">
                  <img
                    src="assets/imgs/theme/icons/phone-call.svg"
                    alt="hotline"
                  />
                  <p>
                    1900 - 6666<span>Working 8:00 - 22:00</span>
                  </p>
                </div>
                <div className="hotline d-lg-inline-flex">
                  <img
                    src="assets/imgs/theme/icons/phone-call.svg"
                    alt="hotline"
                  />
                  <p>
                    1900 - 8888<span>24/7 Support Center</span>
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                <div className="mobile-social-icon">
                  <h6>Follow Us</h6>
                  <a href="#">
                    <img
                      src="assets/imgs/theme/icons/icon-facebook-white.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/imgs/theme/icons/icon-twitter-white.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/imgs/theme/icons/icon-instagram-white.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/imgs/theme/icons/icon-pinterest-white.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/imgs/theme/icons/icon-youtube-white.svg"
                      alt=""
                    />
                  </a>
                </div>
                <p className="font-sm">
                  Up to 15% discount on your first subscribe
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProductsGridPage;
