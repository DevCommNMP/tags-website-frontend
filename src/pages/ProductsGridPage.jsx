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
import ModalQuickView from "../components/ModalQuickView.jsx";
import { Pagination, DropdownButton, Dropdown } from "react-bootstrap";

const ProductsGridPage = ({ data }) => {
  const { title } = useParams();
  const storeData = useSelector((store) => store.products);
  const { products, productsLoading, appErr, serverErr } = storeData;
  console.log(products);
  const [sliderValues, setSliderValues] = useState([0, 100]);
  const [productsPerPage, setProductsPerPage] = useState(5);

  const dispatch = useDispatch();

  useEffect(() => {
    const res = dispatch(fetchAllProductsAction());
    console.log(res);
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1); // State to manage current page

  // Function to handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle dropdown selection
  const handlePerPageChange = (value) => {
    setProductsPerPage(value);
    setCurrentPage(1); // Reset current page to 1 when changing products per page
  };

  // Calculate index of first and last product for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Slice products based on pagination
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
        ></div>
        <header className="header-area header-style-1 header-height-2">
          <Header />
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
                  <div className="products-per-page-dropdown">
                    <DropdownButton id="products-per-page-dropdown bg-light" title={`Products Per Page: ${productsPerPage}`}>
                      <Dropdown.Item onClick={() => handlePerPageChange(5)}>5</Dropdown.Item>
                      <Dropdown.Item onClick={() => handlePerPageChange(10)}>10</Dropdown.Item>
                      <Dropdown.Item onClick={() => handlePerPageChange(25)}>25</Dropdown.Item>
                      <Dropdown.Item onClick={() => handlePerPageChange(50)}>50</Dropdown.Item>
                      <Dropdown.Item onClick={() => handlePerPageChange(100)}>100</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
                <div className="row product-grid">
                  {currentProducts.map((product, index) => (
                    <div className="col-lg-1-4 col-md-3 col-12 col-sm-6" key={index}>
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to="/products/:id">
                              <img className="default-img" src={product.productImage} alt="" />
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <a aria-label="Add To Wishlist" className="action-btn">
                              <i className="fi-rs-heart"></i>
                            </a>
                            <ModalQuickView product={product} />
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className={product.tag}>{product.tag}</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <h2 className="text-center mt-3 mb-2">
                            {" "}
                            <Link to="/products/:id">{product.title}</Link>{" "}
                          </h2>
                          <div className="product-rate-cover flex-align-justify-center"><span>Customer Rating :  </span>
                            <div className="product-rate d-inline-block" style={{ backgroundImage: `url(${starRating})` }}>
                              <div
                                className="product-rating"
                                style={{ width: `${20 * product.rating}%`, backgroundImage: `url(${starRating})` }}
                              ></div>
                            </div>
                            <span className="font-small ml-5 text-muted"> ({product.rating})</span>
                          </div>
                          <div className="product-rate-cover flex-align-justify-center"><span>Available Colors :</span>
                            {product.colorsAvailable.map((color, index) => (
                              <span key={index} className={`product-color-box product${color}`}></span>
                            ))}
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
                  ))}
                </div>
                {/* Pagination */}
                <div className="text-center">
                  <Pagination>
                    <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
                    {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
                      <Pagination.Item key={i + 1} onClick={() => setCurrentPage(i + 1)} active={i + 1 === currentPage}>
                        {i + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === Math.ceil(products.length / productsPerPage)}
                    />
                  </Pagination>
                </div>
              </div>
              <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                {/* Sidebar Content */}

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
                      </li>
                    </Link>
                    <Link to="/categories/Ethnic Shoes">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Ethnic Shoes
                        </a>
                      </li>
                    </Link>
                    <Link to="/categories/Formal Shoes">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Formal Shoes
                        </a>
                      </li>
                    </Link>
                    <Link to="/categories/Party Shoes">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Party Shoes
                        </a>
                      </li>
                    </Link>
                    <Link to="/categories/Sports Shoes">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Sports Shoes
                        </a>
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
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProductsGridPage;
