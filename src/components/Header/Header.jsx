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
    <div className="sticky-header">
      <HeaderMiddle />
      <div className={`mobile-header-active mobile-header-wrapper-style ${isSidebarVisible ? "sidebar-visible" : ""}`}>
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-top">
            <div className="mobile-header-logo">
              <Link to="/">
                <img src="assets/imgs/theme/logo.png" alt="logo" />
              </Link>
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
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="header-nav d-none d-lg-flex">
              <div className="main-categori-wrap d-none d-lg-block">
                <Link className="categories-button-active" to="/all-categories">
                  <span className="fi-rs-apps"></span> <span className="et">Browse</span> All Categories
                </Link>
                <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                  <div className="d-flex categori-dropdown-inner"></div>
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
                      <Link className="active" to="/categories/Deals">Deals</Link>
                    </li>

                    <li>
                      <Link to="/categories/Occation">
                        Occational <i className="fi-rs-angle-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/categories/Casual Footwear">Casual Footwear</Link>
                        </li>
                        <li>
                          <Link to="/categories/Ethnic Footwear">Ethnic Footwear</Link>
                        </li>
                        <li>
                          <Link to="/categories/Formal Footwear">Formal Footwear</Link>
                        </li>
                        <li>
                          <Link to="/categories/Party Footwear">Party Footwear</Link>
                        </li>
                        <li>
                          <Link to="/categories/Sports Footwear">Sports Footwear</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a style={{ cursor: "pointer" }}>
                        Shoe Type <i className="fi-rs-angle-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/categories/Ballerinas Walking Footwear">Ballerinas Walking Footwear</Link>
                        </li>
                        <li>
                          <Link to="/categories/Boots">Boots</Link>
                        </li>
                        <li>
                          <Link to="/categories/Comfort">Comfort</Link>
                        </li>
                        <li>
                          <Link to="/categories/Flip Flop">Flip Flops</Link>
                        </li>
                        <li>
                          <Link to="/categories/kolhapuries">Kolhapuris</Link>
                        </li>
                        <li>
                          <Link to="/categories/Mojaris">Mojaris</Link>
                        </li>
                        <li>
                          <Link to="/categories/Mules">Mules</Link>
                        </li>
                        <li>
                          <Link to="/categories/Pumps">Pumps</Link>
                        </li>
                        <li>
                          <Link to="/categories/Sandles">Sandals</Link>
                        </li>
                        <li>
                          <Link to="/categories/Slides">Slides</Link>
                        </li>
                        <li>
                          <Link to="/categories/Slippers">Slippers</Link>
                        </li>
                        <li>
                          <Link to="/categories/Slip Ons">Slip Ons</Link>
                        </li>
                        <li>
                          <Link to="/categories/Sneakers">Sneakers</Link>
                        </li>
                        <li>
                          <Link to="/categories/Walking Footwear">Walking Footwear</Link> 
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        Colours <i className="fi-rs-angle-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li style={{ display: "flex" }}>
                          <span style={{ backgroundColor: "red", width: "15px", height: "15px" }}></span>
                          <Link to="/products/:red">Red</Link>
                        </li>
                        <li style={{ display: "flex" }}>
                          <span style={{ backgroundColor: "Green", width: "15px", height: "15px" }}></span>

                          <Link to="/products/:color">Green</Link>
                        </li>
                        <li style={{ display: "flex" }}>
                          <span style={{ backgroundColor: "BLUE", width: "15px", height: "15px" }}></span>

                          <Link to="/products/:color">Blue</Link>
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
              +91 98444 88700<span>7 Days Support Center</span>
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
                  <Link to="/wishlist">
                    <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                    <span className="pro-count white">4</span>
                  </Link>
                </div>
                <div className="header-action-icon-2">
                  <Link className="mini-cart-icon" to="/cart">
                    <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                    <span className="pro-count white">2</span>
                  </Link>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      <li>
                        <div className="shopping-cart-img">
                          <a>
                            <img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a>Plain Striola Shirts</a>
                          </h4>
                          <h3>
                            <span>1 × </span>$800.00
                          </h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <a>
                            <i className="fi-rs-cross-small"></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="shopping-cart-img">
                          <a>
                            <img alt="Nest" src="assets/imgs/shop/thumbnail-4.jpg" />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a>Macbook Pro 2024</a>
                          </h4>
                          <h3>
                            <span>1 × </span>$3500.00
                          </h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <a>
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
      </div>
    </>
  );
};

export default Header;
