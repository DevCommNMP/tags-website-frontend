import category1 from "../../assets/imgs/theme/icons/category-1.svg";
import category2 from "../../assets/imgs/theme/icons/category-2.svg";
import category3 from "../../assets/imgs/theme/icons/category-3.svg";
import category4 from "../../assets/imgs/theme/icons/category-4.svg";
import category5 from "../../assets/imgs/theme/icons/category-5.svg";
import category6 from "../../assets/imgs/theme/icons/category-6.svg";
import category7 from "../../assets/imgs/theme/icons/category-7.svg";
import category8 from "../../assets/imgs/theme/icons/category-8.svg";
import category9 from "../../assets/imgs/theme/icons/category-9.svg";
import category10 from "../../assets/imgs/theme/icons/category-10.svg";
import icon1 from "../../assets/imgs/theme/icons/icon-1.svg";
import icon2 from "../../assets/imgs/theme/icons/icon-2.svg";
import icon3 from "../../assets/imgs/theme/icons/icon-3.svg";
import icon4 from "../../assets/imgs/theme/icons/icon-4.svg";
import logo from "../../assets/imgs/theme/logo.png";
import iconHot from "../../assets/imgs/theme/icons/icon-hot.svg";
import iconHeadphone from "../../assets/imgs/theme/icons/icon-headphone.svg";

import { useState, useEffect } from "react";
// import HeaderBottom from "./HeaderBottom";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import MobilePromotion from "./MobilePromotion";
// import HeaderMobile from "./HeaderMobile";
import { Link } from "react-router-dom";

import "./Header.css";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const openMenu = () => {
    setIsSidebarVisible(true);
  };

  const closeMenu = () => {
    setIsSidebarVisible(false);
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.classList.add("sidebar-visible");
    } else {
      document.body.classList.remove("sidebar-visible");
    }
  }, [isSidebarVisible]);

  return (
    <>
      <HeaderTop />
      <HeaderMiddle />
      <div className={`mobile-header-active mobile-header-wrapper-style ${isSidebarVisible ? "sidebar-visible" : ""}`}>
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-top">
            <div className="mobile-header-logo">
              <a href="index.html">
                <img src="assets/imgs/theme/logo.png" alt="logo" />
              </a>
            </div>
            <div onClick={closeMenu} className="mobile-menu-close close-style-wrap close-style-position-inherit">
              <button className="close-style  search-close">
                <i className="icon-top"></i>
                <i className="icon-bottom"></i>
              </button>
            </div>
          </div>
          <HeaderMobile />
        </div>
      </div>

      <MobilePromotion />
      <div className="header-bottom header-bottom-bg-color sticky-bar">
        <div className="container">
          <div className="header-wrap header-space-between position-relative">
            <div className="logo logo-width-1 d-block d-lg-none">
              <a href="index.html">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="header-nav d-none d-lg-flex">
              <div className="main-categori-wrap d-none d-lg-block">
                <Link className="categories-button-active" to="/categories/Products">
                  <span className="fi-rs-apps"></span> <span className="et">Browse</span> All Categories
                  {/* <i className="fi-rs-angle-down"></i> */}
                </Link>
                <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                  <div className="d-flex categori-dropdown-inner">
                    <ul>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img src={category1} alt="" />
                          Milks and Dairies
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img src={category2} alt="" />
                          Clothing & beauty
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img src={category3} alt="" />
                          Pet Foods & Toy
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img src={category4} alt="" />
                          Baking material
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img src={category5} alt="" />
                          Fresh Fruit
                        </a>
                      </li>
                    </ul>
                    <ul className="end">
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img src={category6} alt="" />
                          Wines & Drinks
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img src={category7} alt="" />
                          Fresh Seafood
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img src={category8} alt="" />
                          Fast food
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img src={category9} alt="" />
                          Vegetables
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img src={category10} alt="" />
                          Bread and Juice
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="more_slide_open custom">
                    <div className="d-flex categori-dropdown-inner">
                      <ul>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src={icon1} alt="" />
                            Milks and Dairies
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src={icon2} alt="" />
                            Clothing & beauty
                          </a>
                        </li>
                      </ul>
                      <ul className="end">
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src={icon3} alt="" />
                            Wines & Drinks
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src={icon4} alt="" />
                            Fresh Seafood
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="more_categories">
                    <span className="icon"></span> <span className="heading-sm-1">Show more...</span>
                  </div>
                </div>
              </div>
              <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                <nav>
                  <ul>
                    <li className="hot-deals">
                      <img src={iconHot} alt="hot deals" />
                      <a href="shop-grid-right.html">
                        <Link to="/categories/Deals">Deals</Link>
                      </a>
                    </li>

                    {/* <li>
                                        <a href='shop-grid-right.html'>Shop <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='shop-grid-right.html'>Shop Grid – Right Sidebar</a></li>
                                            <li><a href='shop-grid-left.html'>Shop Grid – Left Sidebar</a></li>
                                            <li><a href='shop-list-right.html'>Shop List – Right Sidebar</a></li>
                                            <li><a href='shop-list-left.html'>Shop List – Left Sidebar</a></li>
                                            <li><a href='shop-fullwidth.html'>Shop - Wide</a></li>
                                            <li>
                                                <a href="#">Single Product <i className="fi-rs-angle-right"></i></a>
                                                <ul className="level-menu">
                                                    <li><a href='#'>Product – Right Sidebar</a>
                                                    </li>
                                                    <li><a href='shop-product-left.html'>Product – Left Sidebar</a></li>
                                                    <li><a href='shop-product-full.html'>Product – No sidebar</a></li>
                                                    <li><a href='shop-product-vendor.html'>Product – Vendor Infor</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href='shop-filter.html'>Shop – Filter</a></li>
                                            <li><a href='shop-wishlist.html'>Shop – Wishlist</a></li>
                                            <li><a href='shop-cart.html'>Shop – Cart</a></li>
                                            <li><a href='shop-checkout.html'>Shop – Checkout</a></li>
                                            <li><a href='shop-compare.html'>Shop – Compare</a></li>
                                            <li>
                                                <a href="#">Shop Invoice<i className="fi-rs-angle-right"></i></a>
                                                <ul className="level-menu">
                                                    <li><a href='shop-invoice-1.html'>Shop Invoice 1</a></li>
                                                    <li><a href='shop-invoice-2.html'>Shop Invoice 2</a></li>
                                                    <li><a href='shop-invoice-3.html'>Shop Invoice 3</a></li>
                                                    <li><a href='shop-invoice-4.html'>Shop Invoice 4</a></li>
                                                    <li><a href='shop-invoice-5.html'>Shop Invoice 5</a></li>
                                                    <li><a href='shop-invoice-6.html'>Shop Invoice 6</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                    {/* <li>
                                        <a href="#">Vendors <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='vendors-grid.html'>Vendors Grid</a></li>
                                            <li><a href='vendors-list.html'>Vendors List</a></li>
                                            <li><a href='vendor-details-1.html'>Vendor Details 01</a></li>
                                            <li><a href='vendor-details-2.html'>Vendor Details 02</a></li>
                                            <li><a href='vendor-dashboard.html'>Vendor Dashboard</a></li>
                                            <li><a href='vendor-guide.html'>Vendor Guide</a></li>
                                        </ul>
                                    </li> */}

                    <li className="position-static">
                      <a href="#">
                        Women <i className="fi-rs-angle-down"></i>
                      </a>
                      <ul className="mega-menu">
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">
                            Occasion
                          </a>
                          <ul>
                            <li>
                              <a href="#">Casual Shoes</a>
                            </li>
                            <li>
                              <a href="#">Ethnic Shoes</a>
                            </li>
                            <li>
                              <a href="#">Formal Shoes</a>
                            </li>
                            <li>
                              <a href="#">Party Shoes</a>
                            </li>
                            <li>
                              <a href="#">Sports Shoes</a>
                            </li>
                            {/* <li><a href='#'>Packaged Produce</a></li> */}
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">
                            Shoe Type
                          </a>
                          <ul>
                            <li>
                              <a href="#">Ballerinas Walking Shoes</a>
                            </li>
                            <li>
                              <a href="#">Boots</a>
                            </li>
                            <li>
                              <a href="#">Comfort</a>
                            </li>
                            <li>
                              <a href="#">Flip Flops</a>
                            </li>
                            <li>
                              <a href="#">Kolhapuris</a>
                            </li>
                            <li>
                              <a href="#">Mojaris</a>
                            </li>
                            <li>
                              <a href="#">Mules</a>
                            </li>
                            <li>
                              <a href="#">Pumps</a>
                            </li>
                            <li>
                              <a href="#">Sandals</a>
                            </li>
                            <li>
                              <a href="#">Slides</a>
                            </li>
                            <li>
                              <a href="#">Slippers</a>
                            </li>
                            <li>
                              <a href="#">Slip Ons</a>
                            </li>
                            <li>
                              <a href="#">Sneakers</a>
                            </li>
                            <li>
                              <a href="#">Walking Shoes</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">
                            Colors
                          </a>
                          <ul>
                            <li>
                              <a href="#">Black</a>
                            </li>
                            <li>
                              <a href="#">White</a>
                            </li>
                            <li>
                              <a href="#">Red</a>
                            </li>
                            <li>
                              <a href="#">Blue</a>
                            </li>
                            <li>
                              <a href="#">maroon</a>
                            </li>
                            <li>
                              <a href="#">Purple</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">
                            Brands
                          </a>
                          <ul>
                            <li>
                              <a href="#">Fila</a>
                            </li>
                            <li>
                              <a href="#">Cheemo</a>
                            </li>
                            <li>
                              <a href="#">DoubleU</a>
                            </li>
                            <li>
                              <a href="#">Fitflop</a>
                            </li>
                            <li>
                              <a href="#">Haute Diva</a>
                            </li>
                            <li>
                              <a href="#">Mochi</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="active" to="/categories/Occation">
                        Occation <i className="fi-rs-angle-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/categories/Casual Shoes">Casual Shoes</Link>
                        </li>
                        <li>
                          <Link to="/categories/Ethnic Shoes">Ethnic Shoes</Link>
                        </li>
                        <li>
                          <Link to="/categories/Formal Shoes">Formal Shoes</Link>
                        </li>
                        <li>
                          <Link to="/categories/Party Shoes">Party Shoes</Link>
                        </li>
                        <li>
                          <Link to="/categories/Sports Shoes">Sports Shoes</Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                                        <a href='blog-category-grid.html'>Blog <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='blog-category-grid.html'>Blog Category Grid</a></li>
                                            <li><a href='blog-category-list.html'>Blog Category List</a></li>
                                            <li><a href='blog-category-big.html'>Blog Category Big</a></li>
                                            <li><a href='blog-category-fullwidth.html'>Blog Category Wide</a></li>
                                            <li>
                                                <a href="#">Single Post <i className="fi-rs-angle-right"></i></a>
                                                <ul className="level-menu level-menu-modify">
                                                    <li><a href='blog-post-left.html'>Left Sidebar</a></li>
                                                    <li><a href='blog-post-right.html'>Right Sidebar</a></li>
                                                    <li><a href='blog-post-fullwidth.html'>No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                    <li>
                      <a href="#">
                        Shoe Type <i className="fi-rs-angle-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">Ballerinas Walking Shoes</a>
                        </li>
                        <li>
                          <Link to="/categories/Boots" href="#">
                            Boots
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/Comfort" href="#">
                            Comfort
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/Flip Flop" href="#">
                            Flip Flops
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/kolhapuries" href="#">
                            Kolhapuris
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/Mojaris" href="#">
                            Mojaris
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/Mules" href="#">
                            Mules
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/Pumps" href="#">
                            Pumps
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/Sandles" href="#">
                            Sandals
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/Slides" href="#">
                            Slides
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/Slippers" href="#">
                            Slippers
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/Slip Ons" href="#">
                            Slip Ons
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/Sneakers" href="#">
                            Sneakers
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/Walking Shoes" href="#">
                            Walking Shoes
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/categories/Premium Leather">About</Link>
                    </li>
                    <li>
                      <Link to="/categories/Premium Leather" style={{ color: "#d02327" }}>
                        Premium Leather
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="hotline d-none d-lg-flex">
              <img src={iconHeadphone} alt="hotline" />
              <p>
                1900 - 888<span>24/7 Support Center</span>
              </p>
            </div>
            <div onClick={openMenu} className="header-action-icon-2 d-block d-lg-none">
              <div className="burger-icon burger-icon-white">
                <span className="burger-icon-top"></span>
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
            <div className="header-action-right d-block d-lg-none">
              <div className="header-action-2">
                <div className="header-action-icon-2">
                  <a href="shop-wishlist.html">
                    <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                    <span className="pro-count white">4</span>
                  </a>
                </div>
                <div className="header-action-icon-2">
                  <a className="mini-cart-icon" href="shop-cart.html">
                    <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                    <span className="pro-count white">2</span>
                  </a>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="#">
                            <img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a href="#">Plain Striola Shirts</a>
                          </h4>
                          <h3>
                            <span>1 × </span>$800.00
                          </h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#">
                            <i className="fi-rs-cross-small"></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="#">
                            <img alt="Nest" src="assets/imgs/shop/thumbnail-4.jpg" />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a href="#">Macbook Pro 2024</a>
                          </h4>
                          <h3>
                            <span>1 × </span>$3500.00
                          </h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#">
                            <i className="fi-rs-cross-small"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="shopping-cart-footer">
                      <div className="shopping-cart-total">
                        <h4>
                          Total <span>$383.00</span>
                        </h4>
                      </div>
                      <div className="shopping-cart-button">
                        <Link to="/checkouts">View cart</Link>
                        <Link to="/checkouts">Checkout</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
