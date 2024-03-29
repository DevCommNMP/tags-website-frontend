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
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="header-nav d-none d-lg-flex">
              <div className="main-categori-wrap d-none d-lg-block">
                <Link className="categories-button-active" to="/all-categories">
                  <span className="fi-rs-apps"></span> <span className="et">Browse</span> All Categories
                  {/* <i className="fi-rs-angle-down"></i> */}
                </Link>
              </div>
              <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                <nav>
                  <ul>
                    <li className="hot-deals">
                      <img src={iconHot} alt="hot deals" />
                      <a>
                        <Link to="/categories/Deals">Deals</Link>
                      </a>
                    </li>

                    <li className="position-static">
                      <a>
                        Women <i className="fi-rs-angle-down"></i>
                      </a>
                      <ul className="mega-menu">
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title">Occasion</a>
                          <ul>
                            <li>
                              <a>Casual Shoes</a>
                            </li>
                            <li>
                              <a>Ethnic Shoes</a>
                            </li>
                            <li>
                              <a>Formal Shoes</a>
                            </li>
                            <li>
                              <a>Party Shoes</a>
                            </li>
                            <li>
                              <a>Sports Shoes</a>
                            </li>
                            {/* <li><a href='#'>Packaged Produce</a></li> */}
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title">Shoe Type</a>
                          <ul>
                            <li>
                              <a>Ballerinas Walking Shoes</a>
                            </li>
                            <li>
                              <a>Boots</a>
                            </li>
                            <li>
                              <a>Comfort</a>
                            </li>
                            <li>
                              <a>Flip Flops</a>
                            </li>
                            <li>
                              <a>Kolhapuris</a>
                            </li>
                            <li>
                              <a>Mojaris</a>
                            </li>
                            <li>
                              <a>Mules</a>
                            </li>
                            <li>
                              <a>Pumps</a>
                            </li>
                            <li>
                              <a>Sandals</a>
                            </li>
                            <li>
                              <a>Slides</a>
                            </li>
                            <li>
                              <a>Slippers</a>
                            </li>
                            <li>
                              <a>Slip Ons</a>
                            </li>
                            <li>
                              <a>Sneakers</a>
                            </li>
                            <li>
                              <a>Walking Shoes</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title">Colors</a>
                          <ul>
                            <li>
                              <a>Black</a>
                            </li>
                            <li>
                              <a>White</a>
                            </li>
                            <li>
                              <a>Red</a>
                            </li>
                            <li>
                              <a>Blue</a>
                            </li>
                            <li>
                              <a>maroon</a>
                            </li>
                            <li>
                              <a>Purple</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title">Brands</a>
                          <ul>
                            <li>
                              <a>Fila</a>
                            </li>
                            <li>
                              <a>Cheemo</a>
                            </li>
                            <li>
                              <a>DoubleU</a>
                            </li>
                            <li>
                              <a>Fitflop</a>
                            </li>
                            <li>
                              <a>Haute Diva</a>
                            </li>
                            <li>
                              <a>Mochi</a>
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
                      <a>
                        Shoe Type <i className="fi-rs-angle-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a>Ballerinas Walking Shoes</a>
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
                          <Link to="/categories/Walking Shoes">Walking Shoes</Link>
                        </li>
                        x
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
                  <Link href="/wishlist">
                    <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                    <span className="pro-count white">4</span>
                  </Link>
                </div>
                <div className="header-action-icon-2">
                  <Link className="mini-cart-icon" href="/cart">
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
    </>
  );
};

export default HeaderBottom;
