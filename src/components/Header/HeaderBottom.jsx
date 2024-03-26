import logo from "../../assets/imgs/theme/logo.png";
import iconHot from "../../assets/imgs/theme/icons/icon-hot.svg";
import iconHeadphone from "../../assets/imgs/theme/icons/icon-headphone.svg";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <>
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
                1900 - 888<span>7 Days Support Center</span>
              </p>
            </div>
            <div className="header-action-icon-2 d-block d-lg-none">
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

export default HeaderBottom;
