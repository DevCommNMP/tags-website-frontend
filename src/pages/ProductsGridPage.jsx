/* eslint-disable react/jsx-key */
import category_bg from "../assets/imgs/banner/category_bg.png";
import starRating from "../assets/imgs/theme/rating-stars.png";
import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Header from "../components/Header/Header";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { fetchAllProductsAction } from "../redux/actions/product/productActions.js";
import { useSelector } from "react-redux";
import DealsOfTheDay from "../components/DealsOfTheDay.jsx";
import NewProducts from "../components/NewProducts.jsx";
import ModalQuickView from "../components/ModalQuickView.jsx";

const ProductsGridPage = ({ data }) => {
  const { title } = useParams();
  const storeData = useSelector((store) => store.products);
  const { products, productsLoading, appErr, serverErr } = storeData;
  // console.log(products, productsLoading, appErr, serverErr)
  console.log(products);
  const [sliderValues, setSliderValues] = useState([0, 100]);
  const dispatch = useDispatch();
  useEffect(() => {
    const res = dispatch(fetchAllProductsAction());
    console.log(res);
  }, [dispatch]);
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
        <ModalQuickView />
        <div
          className="modal fade custom-modal"
          id="quickViewModal"
          tabIndex="-1"
          aria-labelledby="quickViewModalLabel"
          aria-hidden="true"
        ></div>
        <header className="header-area header-style-1 header-height-2">
          <div className="mobile-promotion">
            <span>
              Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left
            </span>
          </div>
          <Header />
          <div className="header-bottom header-bottom-bg-color sticky-bar">
            <div className="container"></div>
          </div>
        </header>
        <main className="main">
          <div className="page-header mt-30 mb-50">
            <div className="container">
              <div className="archive-header category_bg" style={{ backgroundImage: `url(${category_bg})` }}>
                <div className="row align-items-center">
                  <div className="col-xl-3">
                    <h1 className="mb-15">{title}</h1>
                    <div className="breadcrumb">
                      <Link to="/" rel="nofollow">
                        <i className="fi-rs-home mr-5"></i>Home
                      </Link>
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
                      We found <strong className="text-brand">{products.length}</strong> items for you!
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
                    </div>
                  </div>
                </div>
                <div className="row product-grid">
                  {products.map((product) => {
                    return (
                      <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <Link to="/products/dummy">
                                <img className="default-img" src={product.productImage} alt="" />
                              </Link>
                            </div>
                            <div className="product-action-1">
                              <a aria-label="Add To Wishlist" className="action-btn">
                                <i className="fi-rs-heart"></i>
                              </a>
                              <ModalQuickView />
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className={product.tag}>{product.tag}</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">{/* <a>Snack</a> */}</div>
                            <h2>
                              <Link to="/products/dummy">{product.title}</Link>
                            </h2>
                            <div className="product-rate-cover">
                              <div className="product-rate d-inline-block" style={{ backgroundImage: `url(${starRating})` }}>
                                <div
                                  className="product-rating"
                                  style={{ width: `${20 * product.rating}%`, backgroundImage: `url(${starRating})` }}
                                ></div>
                              </div>
                              <span className="font-small ml-5 text-muted"> ({product.rating})</span>
                            </div>
                            <div>
                              <span className="font-small text-muted">{/* By <a>NestFood</a> */}</span>
                            </div>
                            <div className="product-card-bottom">
                              <div className="product-price">
                                <span>&#8377;{product.SellingPrice}</span>
                                <span className="old-price">&#8377;{product.SellingPrice}</span>
                              </div>
                              <div className="add-cart">
                                <a className="add">
                                  <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="pagination-area mt-20 mb-20">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-start">
                      <li className="page-item">
                        <a className="page-link">
                          <i className="fi-rs-arrow-small-left"></i>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">1</a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link">2</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link dot">...</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">6</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">
                          <i className="fi-rs-arrow-small-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <DealsOfTheDay />
                {/* deals of the day to be pasted/imported here */}
              </div>
              <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                <div className="sidebar-widget widget-category-2 mb-30">
                  <h5 className="section-title style-1 mb-30">Category</h5>
                  <ul>
                    <Link to="/categories/casual Shoes">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Casual Shoes
                        </a>
                        {/* <span className="count">30</span> */}
                      </li>
                    </Link>
                    <Link to="/categories/Ethnic Shoes">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Ethnic Shoes
                        </a>
                        {/* <span className="count">30</span> */}
                      </li>
                    </Link>
                    <Link to="/categories/Formal Shoes">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Formal Shoes
                        </a>
                        {/* <span className="count">30</span> */}
                      </li>
                    </Link>
                    <Link to="/categories/Party Shoes">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Party Shoes
                        </a>
                        {/* <span className="count">30</span> */}
                      </li>
                    </Link>
                    <Link to="/categories/Sports Shoes">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
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
                      <Slider min={0} max={100} value={sliderValues} onChange={handleSliderChange} onClick={handleSliderClick} range />
                    </div>
                  </div>
                  <div className="list-group">
                    <div className="list-group-item mb-10 mt-10">
                      <label className="fw-900">Color</label>
                      <div className="custome-checkbox">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox1">
                          <span>Red (56)</span>
                        </label>
                        <br />
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox2" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox2">
                          <span>Green (78)</span>
                        </label>
                        <br />
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox3">
                          <span>Blue (54)</span>
                        </label>
                      </div>
                      <label className="fw-900 mt-15">Item Condition</label>
                      <div className="custome-checkbox">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox11">
                          <span>New (1506)</span>
                        </label>
                        <br />
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox21" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox21">
                          <span>Refurbished (27)</span>
                        </label>
                        <br />
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox31" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox31">
                          <span>Used (45)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <a className="btn btn-sm btn-default">
                    <i className="fi-rs-filter mr-5"></i> Fillter
                  </a>
                </div>
                <NewProducts />
              </div>
            </div>
          </div>
      </div>
    </div>
        </main >
  <Footer />
      </div >
    </div >
  );
};

export default ProductsGridPage;